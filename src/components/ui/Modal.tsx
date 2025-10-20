"use client"
import React, { ReactNode } from 'react'

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
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 w-full max-w-md relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                >
                    ✕
                </button>

                {/* Title */}
                {title && (
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                        {title}
                    </h2>
                )}

                {/* Modal Content */}
                <div>{children}</div>
            </div>
        </div>
    )
}

export default Modal