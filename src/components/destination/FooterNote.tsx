"use client";
import Link from "next/link";
import React from "react";

const FooterNote = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mx-5 lg:mx-20 sm:my-20 bg-soft-beige rounded-2xl p-10">
      <div className="space-y-3 text-center sm:text-left">
        <h3 className="text-black text-3xl sm:text-5xl font-semibold font-playfair-display tracking-wide">
          Your journey starts here
        </h3>
        <p className="text-sm sm:text-lg text-black leading-6">
          Let us guide you forward
        </p>
      </div>

      <Link
        href="/contact-us"
        className="mt-6 sm:mt-0 border border-black text-black rounded-full px-8 py-3 text-base font-medium 
    transition-all duration-300 hover:opacity-80"
      >
        Let&apos;s go places
      </Link>
    </div>
  );
};

export default FooterNote;
