"use client";
import { useEffect, useState } from "react";

interface CountryData {
    country: string;
    cities: string[];
}

export default function Quotation() {

    const [phone, setPhone] = useState("+94");
    const [countries, setCountries] = useState<CountryData[]>([]);

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
                const res = await fetch(process.env.COUNTRY_API_URL!);
                const data = await res.json();
                setCountries(data.data); // API returns { data: [ { country, cities } ] }
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };

        fetchCountries();
    }, []);

    return <>
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg my-10">
            <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
                Let's Plan Your Tour
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" >
                <div className="flex flex-col">
                    <label htmlFor="destination" className="text-gray-700 font-medium mb-2">
                        Destination
                    </label>
                    <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green">
                        <option value="" defaultValue={""}>- Select -</option>
                        <option value="srilanka">Sri Lanka</option>
                        <option value="maldives">Maldives</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="traveldate" className="text-gray-700 font-medium mb-2">
                        Depature Date
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-gray-700 font-medium mb-2">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-gray-700 font-medium mb-2">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-gray-700 font-medium mb-2">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="hello@example.com"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="phone" className="text-gray-700 font-medium mb-2">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        placeholder="hello@example.com"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green"
                        onChange={handlePhoneChange}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="adults" className="text-gray-700 font-medium mb-2">
                        Country
                    </label>
                    <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green">
                        <option value="">Select Country</option>
                        {countries.map((c) => (
                            <option key={c.country} value={c.country}>
                                {c.country}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="adults" className="text-gray-700 font-medium mb-2">
                        Adults ( Age 12+ )
                    </label>
                    <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green">
                        <option value="0">- Select -</option>
                        <option value="1">1 Adult</option>
                        <option value="2">2 Adults</option>
                        <option value="3">3 Adults</option>
                        <option value="4">4 Adults</option>
                        <option value="5">5 Adults</option>
                        <option value="6">6 Adults</option>
                        <option value="7">7 Adults</option>
                        <option value="8">8 Adults</option>
                        <option value="9">9 Adults</option>
                        <option value="10">10 Adults</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="children" className="text-gray-700 font-medium mb-2">
                        Children (Age 2-11)
                    </label>
                    <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green">
                        <option value="0">- Select -</option>
                        <option value="1">1 Child</option>
                        <option value="2">2 Children</option>
                        <option value="3">3 Children</option>
                        <option value="4">4 Children</option>
                        <option value="5">5 Children</option>
                        <option value="6">6 Children</option>

                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="children" className="text-gray-700 font-medium mb-2">
                        Infants (Age 0-1)
                    </label>
                    <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green">
                        <option value="0">- Select -</option>
                        <option value="1">1 </option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 </option>

                    </select>
                </div>

                <div className="flex flex-col md:col-span-2">
                    <label htmlFor="message" className="text-gray-700 font-medium mb-2">
                        Tell us your budget, wishes if you`re celebrating something special.
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Any special requests or requirements?"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green"
                    ></textarea>
                </div>
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