import React from 'react';

interface ModalEmojiProps {
    children: any;
}

export const ModalBody: React.FC<ModalEmojiProps> = ({children}) => {

    return (
        <p aria-label="party-popper-emoji"> {children} </p>
    )
}