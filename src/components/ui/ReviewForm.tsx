import React from 'react'

const ReviewForm = () => {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg my-10">
            <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
                Share Your Travel Experience
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-gray-700 font-medium mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-gray-700 font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="location" className="text-gray-700 font-medium mb-2">
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="Enter your location"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="package" className="text-gray-700 font-medium mb-2">
                        Package
                    </label>
                    <input
                        type="text"
                        id="package"
                        name="package"
                        placeholder="Enter your travel package"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green"
                    />
                </div>
                <div className="md:col-span-2 flex flex-col">
                    <label htmlFor="review" className="text-gray-700 font-medium mb-2">
                        Review
                    </label>
                    <textarea
                        id="review"
                        name="review"
                        rows={4}
                        placeholder="Share your travel experience..."
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green"
                    ></textarea>
                </div>
                <div className="md:col-span-2 flex justify-center mt-4">
                    <button
                        type="submit"
                        className="bg-sea-green text-white py-3 px-10 rounded-full font-medium 
                   hover:bg-emerald-600 transition-all duration-300"
                    >
                        Submit Review
                    </button>
                </div>
            </form>
        </div>

    )
}

export default ReviewForm