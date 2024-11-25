import React, {ReactNode, createContext, KeyboardEvent} from 'react';
import "./compound-modal.css";
import FocusLock from 'react-focus-lock';

interface ModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    children?: ReactNode;
    handleClose: () => void;
}

interface BigEmojiProps {
    children?: ReactNode;
}

interface ModalHeaderProps {
    children?: ReactNode;
}

interface ModalDescriptionProps {
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

const ModalContext = createContext<ModalProps>({
    setIsOpen: () => {
    }, isOpen: false, handleClose: () => {
    }
});

export const Modal = ({isOpen, setIsOpen, handleClose, children}: ModalProps) => {

    const handleKeyDown = (e: KeyboardEvent) => {
        console.log(e, 'henk henk henk')
        switch (e.key) {
            case "Escape":
                setIsOpen(false);
                e.preventDefault();
                break;
            case "Enter":
                handleClose();
                e.preventDefault();
                break;
            default:
                break;
        }
    }

    return (
        <ModalContext.Provider value={{setIsOpen, isOpen, handleClose}}>
            {isOpen && (
                <dialog className={"modal"} onKeyDown={handleKeyDown}>
                    {children}
                </dialog>
            )}
        </ModalContext.Provider>
    );
};

const BigEmoji: React.FC<BigEmojiProps> = ({children}) => {
    return <div className={"modal__emoji"}>{children}</div>
};

const Header: React.FC<ModalHeaderProps> = ({children}) => {
    return <div className={"modal__header"}>
        <h4 className={"modal__header-content"}>{children}</h4>
    </div>
};

const Description: React.FC<ModalDescriptionProps> = ({children}) => {
    return <div className={"modal__description"}>
        <p className={"modal__description-content"}>{children}</p>
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
            <FocusLock>
                <button className={"modal__button"} onClick={handleClose}>{children}</button>
            </FocusLock>
        </div>
    </div>
};

Modal.BigEmoji = BigEmoji;
Modal.Header = Header;
Modal.Description = Description;
Modal.Body = Body;
Modal.Footer = Footer;