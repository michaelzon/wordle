import React, { createContext, useContext, useState, ReactNode } from 'react';
import {
    modal,
    modalHeader,
    modalBody,
    modalFooter,
    modalButton,
    modalHeaderContent,
    modalBodyContent,
    modalFooterContent,
} from "../styles/Modal.css";

interface ModalProps {
    isOpen: boolean;
    children?: ReactNode;
}

interface ModalHeaderProps {
    emoji?: string;
    title: string;
    children?: ReactNode
}

interface ModalBodyProps {
    description: string;
    children?: ReactNode
}

interface ModalFooterProps {
    handleClose: () => void
    children?: ReactNode
}

const ModalContext = createContext<ModalProps>({ isOpen: false });

export const CompoundModal = ({ isOpen, children }: ModalProps) => {
    const childrenArray = React.Children.toArray(children);
    const header = childrenArray.find(child => (child as React.ReactElement<any>).type === CompoundModal.Header);
    const body = childrenArray.find(child => (child as React.ReactElement<any>).type === CompoundModal.Body);
    const footer = childrenArray.find(child => (child as React.ReactElement<any>).type === CompoundModal.Footer);

    console.log('header', header)

    return (
        <ModalContext.Provider value={{ isOpen }}>
            {isOpen && (
                <div className={modal}>
                    <h1 className={modalHeader}>{header}</h1> 
                    <div className={modalBody}>{body}</div>
                    <div className={modalFooter}>{footer}</div>
                </div>
            )}
        </ModalContext.Provider>
    );
};

const Header: React.FC<ModalHeaderProps> = ({ title }) => {
    return <div className={modalHeaderContent}>{title}</div>;
};

const Body: React.FC<ModalBodyProps> = ({ description, children }) => {
    return (<div className={modalBodyContent}>
        {description && <p></p>}
        </div>)
    ;
};


const Footer: React.FC<ModalFooterProps> = ({ handleClose, children }) => {
    return <div className={modalFooterContent}><button className={modalButton} onClick={handleClose}>{children}</button></div>;
};


CompoundModal.Header = Header;
CompoundModal.Body = Body;
CompoundModal.Footer = Footer;


