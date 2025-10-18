"use client";
import { useState } from "react";
import ContactUs from "@/components/ui/ContactUs";

interface ModalWithFormProps {
    isOpenModal: boolean;
    setIsOpenModal: (isOpen: boolean) => void;
}

export default function ModalWithForm({ isOpenModal, setIsOpenModal }: ModalWithFormProps) {
    const toggleModal = () => setIsOpenModal(!isOpenModal);

    return (
        <>
            {/* Modal Overlay */}
            {isOpenModal && (
                <div
                    className="fixed inset-0 z-[100] flex justify-center items-center"
                    aria-modal="true"
                >
                    {/* Background overlay */}
                    <div
                        className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300"
                        onClick={toggleModal}
                    ></div>

                    {/* Modal box */}
                    <div
                        className="relative bg-white rounded-xl shadow-lg w-11/12 max-w-lg p-6 z-50 transform transition-all duration-300 scale-95 opacity-0 animate-modal-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-bold mb-4 text-gray-800">
                            Contact Form
                        </h2>
                        <ContactUs onClose={toggleModal} />
                    </div>
                </div>
            )}

            <style jsx>{`
        @keyframes modal-in {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-modal-in {
          animation: modal-in 0.2s ease-out forwards;
        }
      `}</style>
        </>
    );
}
