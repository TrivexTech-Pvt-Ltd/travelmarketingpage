"use client";
import { useEffect, useState } from "react";

interface CountryData {
    country: string;
    cities: string[];
}

export default function Quotation() {

    const [phone, setPhone] = useState("+94");
    const [countries, setCountries] = useState<CountryData[]>([]);
    const [formData, setFormData] = useState({
        destination: "",
        date: "",
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        adults: "0",
        children: "0",
        infants: "0",
        message: "",
    });

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Keep digits and optional + at start
        const value = e.target.value;
        const filtered = value.startsWith("+")
            ? "+" + value.slice(1).replace(/\D/g, "")
            : value.replace(/\D/g, "");

        setPhone(filtered);
    };

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await fetch(process.env.NEXT_PUBLIC_COUNTRY_API_URL!);
                console.log(res);
                const data = await res.json();
                setCountries(data.data); // API returns { data: [ { country, cities } ] }
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };

        fetchCountries();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const dataToSubmit = {
            ...formData,
            phone,
        };


        const res = await fetch("/api/email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                dataToSubmit
            }),
        });
    };

    return <>
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg my-10">
            <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
                Let's Plan Your Tour
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Destination */}
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium mb-2">Destination</label>
                    <select
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green"
                    >
                        <option value="">- Select -</option>
                        <option value="srilanka">Sri Lanka</option>
                        <option value="maldives">Maldives</option>
                    </select>
                </div>

                {/* Departure Date */}
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium mb-2">Departure Date</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green"
                    />
                </div>

                {/* First Name */}
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium mb-2">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green"
                    />
                </div>

                {/* Last Name */}
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium mb-2">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green"
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="hello@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green"
                    />
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={phone}
                        onChange={handlePhoneChange}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green"
                    />
                </div>

                {/* Country */}
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium mb-2">Country</label>
                    <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green"
                    >
                        <option value="">Select Country</option>
                        {countries.map((c) => (
                            <option key={c.country} value={c.country}>
                                {c.country}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Adults */}
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium mb-2">Adults (Age 12+)</label>
                    <select
                        name="adults"
                        value={formData.adults}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green"
                    >
                        {Array.from({ length: 11 }, (_, i) => (
                            <option key={i} value={i}>
                                {i === 0 ? "- Select -" : `${i} Adult${i > 1 ? "s" : ""}`}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Children */}
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium mb-2">Children (Age 2–11)</label>
                    <select
                        name="children"
                        value={formData.children}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green"
                    >
                        {Array.from({ length: 7 }, (_, i) => (
                            <option key={i} value={i}>
                                {i === 0 ? "- Select -" : `${i} Child${i > 1 ? "ren" : ""}`}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Infants */}
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium mb-2">Infants (Age 0–1)</label>
                    <select
                        name="infants"
                        value={formData.infants}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green"
                    >
                        {Array.from({ length: 6 }, (_, i) => (
                            <option key={i} value={i}>
                                {i === 0 ? "- Select -" : i}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Message */}
                <div className="flex flex-col md:col-span-2">
                    <label className="text-gray-700 font-medium mb-2">
                        Tell us your budget, wishes if you&apos;re celebrating something special.
                    </label>
                    <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Any special requests or requirements?"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green"
                    ></textarea>
                </div>

                {/* Submit */}
                <div className="md:col-span-2 text-center">
                    <button
                        type="submit"
                        className="bg-sea-green text-white font-semibold px-6 py-3 rounded-lg hover:bg-sea-green-dark transition-colors"
                    >
                        Submit Now
                    </button>
                </div>
            </form>
        </div>
    </>
}