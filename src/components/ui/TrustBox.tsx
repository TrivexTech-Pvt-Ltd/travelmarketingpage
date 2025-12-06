"use client"
import React, { useEffect } from 'react'

const TrustBox = () => {

    useEffect(() => {
        if (typeof window !== "undefined" && window.Trustpilot) {
            const el = document.getElementById("tp-widget");
            window.Trustpilot.loadFromElement(el);
        }
    }, []);
    return (
        <div
            id="tp-widget"
            className="trustpilot-widget"
            data-locale="en-US"
            data-template-id="56278e9abfbbba0bdcd568bc"
            data-businessunit-id="69328c6af444175f8898d9d8"
            data-style-height="52px"
            data-style-width="100%"
            data-token="0d48b70c-9095-4745-8498-ebab1dba7072"
        >
            <a
                href="https://www.trustpilot.com/review/travelnationsl.com"
                target="_blank"
                rel="noopener"
            >
                Trustpilot
            </a>
        </div>
    )
}

export default TrustBox