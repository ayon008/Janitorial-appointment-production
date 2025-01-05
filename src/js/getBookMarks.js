'use client'
import useAuth from "@/Hooks/useAuth";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const GetBookMarks = (id) => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const uid = user?.uid;
    const { isLoading, isError, error, data: status, refetch } = useQuery({
        queryKey: ['bookmarks'], // Include `uid` in queryKey to refetch if `uid` changes
        queryFn: async () => {
            try {
                const response = await axiosSecure.get(`/bookMarks/${user?.uid}/${id}`);
                const data = await response.data;
                console.log(data, 'bookmarks');
                return data;
            } catch (err) {
                console.error("Error fetching user data:", err);
                throw err; // Rethrow the error to be caught by React Query
            }
        },
        enabled: !!uid
    });
    return { isLoading: false, status, refetch };
};

export default GetBookMarks;