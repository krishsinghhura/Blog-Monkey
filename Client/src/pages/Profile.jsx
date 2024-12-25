import React from 'react'
import NavBar from '../components/NavBar'

const Profile = () => {
  return (
    <>
    <NavBar/>
    <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-8">
            
            <div className="flex items-center justify-between">
                
                <div className="flex items-center">
                
                    <div className="ml-4">
                        <h1 className="text-3xl font-semibold text-gray-800">John Doe</h1>
                    </div>
                </div>
                
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    Edit Profile
                </button>
            </div>


            <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800">Contact Information</h2>
                <div className="mt-4">
                    <p className="text-gray-700"><strong>Email:</strong> john.doe@example.com</p>
                    <p className="text-gray-700"><strong>Username:</strong> john.doe</p>
                    <p className="text-gray-700"><strong>Number of Posts</strong> 12</p>
                </div>
            </div>


            <div className="mt-12">
                <h2 className="text-2xl font-semibold text-gray-800">Recent Blog Post</h2>

                <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md">
                    {/* Blog Card  */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-bold text-gray-800">Understanding Web Development</h3>
                        <p className="mt-2 text-gray-600">Web development is the building and maintenance of websites; it’s the work that happens behind the scenes to make a website look great, work fast, and perform well with a seamless user experience.</p>
                        <div className="mt-4 text-gray-500 text-sm">
                            <p><strong>Author:</strong> John Doe</p>
                            <p><strong>Date:</strong> December 25, 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile