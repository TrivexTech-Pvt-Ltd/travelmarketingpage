"use client";

import { useState } from "react";
import Swal from "sweetalert2";

interface ContactFormProps {
    onClose: () => void;
}

export default function ContactUs({ onClose }: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        consent: false,
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name) newErrors.name = "The field is required.";
        if (!formData.email) newErrors.email = "The field is required.";
        if (!formData.phone) newErrors.phone = "The field is required.";
        if (!formData.subject) newErrors.subject = "The field is required.";
        if (!formData.message) newErrors.message = "The field is required.";
        if (!formData.consent) newErrors.consent = "You must agree before submitting.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        console.log("Submitting contact form:", formData);
        const res = await fetch("/api/contactus", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (data.success) {
            {
                Swal.fire({
                    icon: 'success',
                    title: 'Thank You!',
                    text: 'Your message has been sent successfully.',
                });
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                    consent: false,
                });
                setErrors({});
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please try again later.',
            });
        }


    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                            <label className="flex items-center text-gray-600 mb-1">
                                <span className="mr-2">👤</span> Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full border-b-2 focus:outline-none py-1 ${errors.name ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="flex items-center text-gray-600 mb-1">
                                <span className="mr-2">📧</span> Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full border-b-2 focus:outline-none py-1 ${errors.email ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="flex items-center text-gray-600 mb-1">
                                <span className="mr-2">📞</span> Phone
                            </label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`w-full border-b-2 focus:outline-none py-1 ${errors.phone ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>

                        {/* Subject */}
                        <div>
                            <label className="flex items-center text-gray-600 mb-1">
                                <span className="mr-2">ℹ️</span> Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className={`w-full border-b-2 focus:outline-none py-1 ${errors.subject ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="flex items-center text-gray-600 mb-1">
                            <span className="mr-2">✏️</span> How can we help you? Feel free to get in touch!
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className={`w-full border-b-2 focus:outline-none py-1 ${errors.message ? "border-red-500" : "border-gray-300"
                                }`}
                        />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>

                    {/* Consent */}
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            className="h-4 w-4"
                        />
                        <label className="text-sm text-gray-600">
                            I agree that my data is{" "}
                            <a href="#" className="text-sky-600 underline">
                                collected and stored.
                            </a>
                        </label>
                    </div>
                    {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}

                    {/* Button */}
                    <div className="flex justify-end gap-3 mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-8 py-2 rounded shadow"
                        >
                            GET IN TOUCH
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
