import React, {useEffect} from 'react';
import {useDialog} from 'react-aria';
import type {AriaDialogProps} from 'react-aria';
import "./compound-modal.css";

interface ModalProps extends AriaDialogProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const OldModal: React.FC<ModalProps> = ({isOpen, onClose, children, ...props}) => {
    let ref = React.useRef(null);
    let {dialogProps} = useDialog(props, ref);



    // ensuring escape can also close the modal for accessibility
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <dialog {...dialogProps} ref={ref} className={"modal"}>
            {children}
            <button className={"modal__button"} onClick={onClose}>Try Again</button>
        </dialog>
    );
};

export default OldModal