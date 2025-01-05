'use client'
import React from 'react';
import { CustomChat, FacebookProvider } from 'react-facebook';

const Chat = () => {
    return (
        <FacebookProvider appId="1121645909753321" chatSupport>
            <CustomChat pageId="498761066660090" minimized={false} />
        </FacebookProvider>
    );
};

export default Chat;