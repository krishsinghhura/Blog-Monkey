import React from 'react'
import NavBar from '../components/NavBar'
import BlogCard from '../components/BlogCard'

const Home = () => {
    return (
        <>
            <NavBar />
            <div class="max-w-screen-lg mx-auto mt-8 px-4">
                <div class="flex justify-end">
                    <a href="/addblog">
                        <button class="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            Add Post
                        </button>
                    </a>
                </div>

                <BlogCard />
            </div>

        </>
    )
}

export default Home