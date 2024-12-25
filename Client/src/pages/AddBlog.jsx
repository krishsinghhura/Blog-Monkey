import React from 'react'
import NavBar from '../components/NavBar'

const AddBlog = () => {
    const submitHandler=()=>{
        e.preventdefault();
    }
  return (
    <>
    <NavBar/>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
            <h2 className="text-2xl font-semibold text-center mb-6">Add New Blog</h2>
            <form action="/createpost" method="POST" onClick={()=>{
                    submitHandler(e);
                }}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-semibold text-gray-700">Title</label>
                    <input type="text" id="title" name="title" placeholder="Enter blog title"
                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>

                <div className="mb-4">
                    <label htmlFor="content" className="block text-sm font-semibold text-gray-700">Content</label>
                    <textarea id="content" name="content" rows="5" placeholder="Enter blog content"
                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="author" className="block text-sm font-semibold text-gray-700">Author</label>
                    <input type="text" id="author" name="author" placeholder="Enter author name"
                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>

                <button type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                    Add Blog
                </button>
            </form>
        </div>
    </div>
    </>
  )
}

export default AddBlog