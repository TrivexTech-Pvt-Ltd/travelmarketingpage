"use client"
import React, { ReactNode } from 'react'
import { IoMdClose } from 'react-icons/io';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {

    if (!isOpen) return null;
    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-[120] p-8"
            onClick={onClose}
        >
            <div
                className="
          bg-white relative rounded-md
          w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl
          p-6 sm:p-8
          max-h-[90vh] overflow-y-auto
        "
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    type='button'
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
                >
                    <IoMdClose size={18} />
                </button>

                <div>{children}</div>
            </div>
        </div>
    )
}

export default Modal