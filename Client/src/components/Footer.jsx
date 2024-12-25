import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-indigo-600 text-white py-8">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-lg font-semibold">About Us</h3>
                            <p className="text-sm text-gray-300 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                        </div>

                        <div className="mb-4 md:mb-0">
                            <h3 className="text-lg font-semibold">Quick Links</h3>
                            <ul className="text-sm text-gray-300 mt-2">
                                <li><a href="/" className="hover:text-indigo-300">Home</a></li>
                                <li><a href="/profile" className="hover:text-indigo-300">Profile</a></li>
                                <li><a href="/logout" className="hover:text-indigo-300">Logout</a></li>
                            </ul>
                        </div>

                        <div className="mb-4 md:mb-0">
                            <h3 className="text-lg font-semibold">Contact Us</h3>
                            <p className="text-sm text-gray-300 mt-2">1234 Street Name, City, Country</p>
                            <p className="text-sm text-gray-300">Email: info@example.com</p>
                            <p className="text-sm text-gray-300">Phone: (123) 456-7890</p>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm">
                        <p>&copy; 2024 Blog Monkey. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer