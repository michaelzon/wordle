import React, {createContext} from 'react';
import {emojiWrapper, gameResults, modal, modalButton} from "../Wordle.css";
import {ModalEmoji} from "./ModalEmoji";
import {ModalHeader} from "./ModalHeader";
import {ModalBody} from "./ModalBody";

interface ModalProps {
    header: string;
    emoji: string;
    body: string;
    isOpen: boolean;
    onClose: () => void;
}

export const NewModal: React.FC<ModalProps> = ({header, emoji, body, isOpen, onClose}) => {

    return (
        
        <dialog className={modal}>
            <section className={gameResults} aria-labelledby="game-results">
                <ModalEmoji> {emoji} </ModalEmoji>
                <ModalHeader> {header} </ModalHeader>
                <ModalBody> {body} </ModalBody>
            </section>
        </dialog>
    );


};

interface NewModalWithStatics extends React.FC<ModalProps> {
    ModalEmoji: typeof ModalEmoji;
    Header: typeof ModalHeader;
    Body: typeof ModalBody;
}

const ExtendedNewModal = NewModal as NewModalWithStatics;
ExtendedNewModal.ModalEmoji = ModalEmoji;
ExtendedNewModal.Header = ModalHeader;
ExtendedNewModal.Body = ModalBody;