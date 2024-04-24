import React from 'react';
import {emojiWrapper} from "../styles/Wordle.css";

interface ModalEmojiProps {
    children: any;
}

export const ModalEmoji: React.FC<ModalEmojiProps> = ({children}) => {

    return (
        <div className={emojiWrapper} aria-label="trophy-emoji"> {children}</div>
    )
}