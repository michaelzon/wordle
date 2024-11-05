import React, {ReactNode, createContext} from 'react';
import "./compound-modal.css";

interface ModalProps {
    isOpen: boolean;
    children?: ReactNode;
}

interface BigEmojiProps {
    children?: ReactNode;
}

interface ModalHeaderProps {
    children?: ReactNode;
}

interface ModalBodyProps {
    children?: ReactNode;
}

interface ModalFooterProps {
    handleClose: () => void;
    buttonText?: string;
    children?: ReactNode;
}

const ModalContext = createContext<ModalProps>({isOpen: false});

export const Modal = ({isOpen, children}: ModalProps) => {

    return (
        <ModalContext.Provider value={{isOpen}}>
            {isOpen && (
                <div className={"modal"}>
                    {children}
                </div>
            )}
        </ModalContext.Provider>
    );
};

const BigEmoji: React.FC<BigEmojiProps> = ({children}) => {
    return <div className={"modal__big-emoji"}>
        <div className={"modal__emoji-content"}>{children}</div>
    </div>
};

const Header: React.FC<ModalHeaderProps> = ({children}) => {
    return <div className={"modal__header"}>
        <h4 className={"modal__header-content"}>{children}</h4>
    </div>
};

const Body: React.FC<ModalBodyProps> = ({children}) => {
    return <div className={"modal__body"}>
        <p className={"modal__body-content"}>{children}</p>
    </div>
};

const Footer: React.FC<ModalFooterProps> = ({children, handleClose}) => {
    return <div className={"modal__footer"}>
        <div className={"modal__footer-content"}>
            <button className={"modal__button"} onClick={handleClose}>{children}</button>
        </div>
    </div>
};

Modal.BigEmoji = BigEmoji;
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;