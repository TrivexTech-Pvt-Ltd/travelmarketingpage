"use client"
import { useTourPackageStore } from '@/store/TourPackageStore'
import Image from 'next/image'
import React, { useState } from 'react'
import Modal from '../ui/Modal'
import Quotation from '../ui/Quotation'

const DetailsHeader = () => {
    const data = useTourPackageStore(s => s.tourPackage);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    if (!data) return null;
    return (
        <div className='flex flex-col lg:flex-row md:justify-center md:items-center gap-8 md:gap-16 my-5 max-w-7xl mx-auto'>
            {data?.logo && (
                <div className='flex-shrink-0'>
                    <Image src={data.logo} alt={data.name} width={200} height={200} className='max-sm:mx-auto' />
                </div>
            )}
            <div className='text-lg text-gray-500 flex-1 max-sm:text-center'>
                {data?.descriptionLong}
            </div>
            <div className="flex-shrink-0 max-sm:mx-auto">
                <div className='space-y-3 max-sm:mx-auto'>
                    <p className='text-lg text-gray-500 uppercase'>PER ROOM STARTING</p>
                    {/* <p className='text-5xl text-sea-green font-medium'>$ {thousandSeparator(data?.price)}</p> */}
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="hidden tablet:block text-white bg-sea-green rounded-md py-3 px-6 cursor-pointer uppercase text-sm hover:opacity-90 mx-auto"
                        type="button"
                    >
                        inquire
                    </button>
                </div>
            </div>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Get a Quote"
            >
                <Quotation />
            </Modal>
        </div>
    )
}

export default DetailsHeader