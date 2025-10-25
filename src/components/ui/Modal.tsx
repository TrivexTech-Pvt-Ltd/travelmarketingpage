"use client";
import React, { useEffect, ReactNode } from "react";
import ReactDOM from "react-dom";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    if (!isOpen) return null;

    const modalContent = (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-[9999] p-8"
            onClick={onClose}
        >
            <div
                className="bg-white relative rounded-md w-full max-w-4xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
                >
                    <IoMdClose size={18} />
                </button>
                <div>{children}</div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(modalContent, document.body);
};

export default Modal;
