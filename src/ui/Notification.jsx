import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import { MdOutlineNotifications } from 'react-icons/md';

const NotificationIcon = () => {
    const [newBlog, setNewBlog] = useState(null);
    const [showNotification, setShowNotification] = useState(false);

    console.log(newBlog, showNotification)

    useEffect(() => {
        // Initialize Pusher client
        const pusher = new Pusher('7a71ab81cc1c36e25c6a', {
            cluster: 'ap2',
        });

        const channel = pusher.subscribe('blog-channel');
        channel.bind('sanityWebhook', (data) => {
            setNewBlog(data);
            setShowNotification(true);
        });

        return () => {
            pusher.unsubscribe('blog-channel');
        };
    }, []);

    return (
        <div>
            <button className="notification-icon">
                <MdOutlineNotifications className="md:text-2xl text-lg" />
            </button>
            {showNotification && newBlog && (
                <div className="notification-popup">
                    <h3>New Blog Published</h3>
                    <p>{newBlog.title}</p>
                    <button onClick={() => setShowNotification(false)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default NotificationIcon;

