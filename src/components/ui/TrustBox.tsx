
import Link from 'next/link'
import React from 'react'

const TrustBox = () => {

    return (
        <section className="w-full bg-gray-900 py-12 flex items-center justify-center max-w-7xl mx-auto rounded-lg">
            <Link
                href="https://www.trustpilot.com/review/travelnationsl.com?utm_medium=trustbox&utm_source=TrustBoxReviewCollector"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group"
            >
                <span className="text-white text-2xl font-semibold tracking-wide transition-opacity">
                    View us on
                </span>
                <img
                    src="https://cdn.trustpilot.net/brand-assets/4.3.0/logo-white.svg"
                    alt="Trustpilot Logo"
                    className="h-10 w-auto transition-transform group-hover:scale-105"
                />

            </Link>
        </section>
    )
}

export default TrustBox