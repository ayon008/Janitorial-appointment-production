'use client'
import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import GetBookMarks from '@/js/getBookMarks';
import React, { useState, useEffect } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { MdBookmark } from 'react-icons/md';
import Swal from 'sweetalert2';

const Bookmarks = ({ id }) => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { status, refetch } = GetBookMarks(id);
    const [isBookmarked, setIsBookmarked] = useState(status?.status); // Local state to manage bookmark status

    console.log(isBookmarked);
    console.log(status);
    


    // Update local state whenever `status` changes
    useEffect(() => {
        setIsBookmarked(status?.status)
    }, [status]);

    const handleBookMarks = () => {
        // Show loading Swal
        // Axios request to add bookmark
        axiosSecure.post(`/bookmarks`, { id, userId: user?.uid })
            .then(res => {
                // Show success Swal
                setIsBookmarked(true);
                refetch();  // Refetch to get updated status from the server
            })
            .catch(err => {
                // Show error Swal
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an error adding the bookmark. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                console.log(err);
            });
    };

    const removeBookmarks = () => {
        // Axios request to remove bookmark
        axiosSecure.delete(`/bookmarks/${user?.uid}/${id}`)
            .then(res => {
                // Show success Swal
                setIsBookmarked(false)
                refetch();  // Refetch to get updated status from the server
            })
            .catch(err => {
                // Show error Swal
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an error removing the bookmark. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                console.log(err);
            });
    };

    return (
        <div>
            {
                !isBookmarked ?
                    <FaBookmark onClick={handleBookMarks} title="Add to bookmarks" className="cursor-pointer" size={'1rem'} />
                    :
                    <MdBookmark onClick={removeBookmarks} title="Already in bookmarks" color="gold" className="cursor-pointer" size={'1rem'} />
            }
        </div>
    );
};

export default Bookmarks;
