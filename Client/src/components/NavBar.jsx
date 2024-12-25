import React from 'react'

const NavBar = () => {
    return (
        <>
            <nav className="bg-indigo-600 p-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="text-white text-2xl font-bold">
                        <a href="/">Blog Monkey</a>
                    </div>


                    <div className="hidden md:flex space-x-6">
                        <a href="/" className="text-white hover:text-indigo-300">Home</a>
                        <a href="/profile" className="text-white hover:text-indigo-300">Profile</a>
                        <a href="/logout" className="text-white hover:text-indigo-300">logout</a>
                    </div>
                </div>

            </nav>

        </>
    )
}

export default NavBar