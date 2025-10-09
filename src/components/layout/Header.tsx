import { Logo } from '@/lib/utils/staticImages'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <nav className='py-4 px-16 text-center text-white flex justify-between items-center fixed top-0 left-0 w-full z-30'>
            <Image src={Logo} alt='logo' height={100} width={300} className='z-30'/>
            <ul className='text-lg text-white flex items-center gap-10'>
                <li>Home</li>
                <li>Destination</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    )
}

export default Header