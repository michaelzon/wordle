import React, { ReactNode, createContext } from 'react';
import {
    modal,
    modalBigEmoji,
    modalBody,
    modalBodyContent,
    modalButton,
    modalEmojiContent,
    modalFooter,
    modalFooterContent,
    modalHeader,
    modalHeaderContent,
} from "../styles/Modal.css";

interface ModalProps {
    isOpen: boolean;
    children?: ReactNode;
}

interface BigEmojiProps {
    emoji?: string;
}

interface ModalHeaderProps {
    emoji?: string;
    title: string;
    children?: ReactNode;
}

interface ModalBodyProps {
    description: string;
    children?: ReactNode;
}

interface ModalFooterProps {
    handleClose: () => void;
    buttonText?: string;
}

const ModalContext = createContext<ModalProps>({ isOpen: false });

export const CompoundModal = ({ isOpen, children }: ModalProps) => {
    const childrenArray = React.Children.toArray(children);
    const bigEmoji = childrenArray.find(child => (child as React.ReactElement<any>).type === CompoundModal.BigEmoji);
    const header = childrenArray.find(child => (child as React.ReactElement<any>).type === CompoundModal.Header);
    const body = childrenArray.find(child => (child as React.ReactElement<any>).type === CompoundModal.Body);
    const footer = childrenArray.find(child => (child as React.ReactElement<any>).type === CompoundModal.Footer);

    return (
        <ModalContext.Provider value={{ isOpen }}>
            {isOpen && (
                <div className={modal}>
                    <div className={modalBigEmoji}> {bigEmoji}</div>
                    <div className={modalHeader}>{header}</div>
                    <div className={modalBody}>{body}</div>
                    <div className={modalFooter}>{footer}</div>
                </div>
            )}
        </ModalContext.Provider>
    );
};

const BigEmoji: React.FC<BigEmojiProps> = ({ emoji }) => {
    return <div className={modalEmojiContent}>{emoji}</div>
};

const Header: React.FC<ModalHeaderProps> = ({ title }) => {
    return <h4 className={modalHeaderContent}>{title}</h4>;
};

const Body: React.FC<ModalBodyProps> = ({ description }) => {
    return <p className={modalBodyContent}>{description}</p>;
};

const Footer: React.FC<ModalFooterProps> = ({ buttonText, handleClose }) => {
    return <div className={modalFooterContent}><button className={modalButton} onClick={handleClose}>{buttonText}</button></div>;
};

CompoundModal.BigEmoji = BigEmoji;
CompoundModal.Header = Header;
CompoundModal.Body = Body;
CompoundModal.Footer = Footer;