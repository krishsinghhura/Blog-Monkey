import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios';
import BlogCard from '../components/BlogCard'

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:4000/");
            setData(response.data);
        }
        fetchData();
    }, [])
    console.log(data);

    return (
        <>
            <NavBar />
            <div className="max-w-screen-lg mx-auto mt-8 px-4">
                <div className="flex justify-end">
                    <a href="/addblog">
                        <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            Add Post
                        </button>
                    </a>
                </div>


                {data.map((item) => (
                    <BlogCard {...item} />
                ))}

            </div>

        </>
    )
}

export default Home