"use client"
import Link from 'next/link'
import React from 'react'

const FooterNote = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto sm:my-20 bg-soft-beige/70 backdrop-blur-sm rounded-3xl px-10 py-10 border border-white/40">
  <div className="space-y-3 text-center sm:text-left">
    <h3 className="text-shadow-wash text-3xl sm:text-5xl font-semibold font-playfair-display tracking-wide">
      Your journey starts here
    </h3>
    <p className="text-sm sm:text-lg text-gray-600 leading-6">
      Let us guide you forward
    </p>
  </div>

  <Link
    href="/contact-us"
    className="mt-6 sm:mt-0 border border-shadow-wash rounded-full px-8 py-3 text-base font-medium 
    hover:bg-shadow-wash hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
  >
    Let&apos;s go places
  </Link>
</div>


    )
}

export default FooterNote