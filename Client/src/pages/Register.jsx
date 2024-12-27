import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate(); 
    const [input, setinput] = useState({
        username: "",
        email: "",
        password: ""
    })
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:4000/register", input);
            console.log("Registration Success:", res.data);
            navigate("/");
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
        }
    };
    
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-200">
                <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
                    <form action="/register" method="POST" onSubmit={submitHandler}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-semibold text-gray-700">Username</label>
                            <input type="text" id="username" name="username" placeholder="Enter your username"
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                value={input.username}
                                onChange={(e) => {
                                    setinput({
                                        ...input, [e.target.name]: e.target.value
                                    })
                                }} />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email"
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                value={input.email}
                                onChange={(e) => {
                                    setinput({
                                        ...input, [e.target.name]: e.target.value
                                    })
                                }} />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
                            <input type="password" id="password" name="password" placeholder="Enter your password"
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                value={input.password}
                                onChange={(e) => {
                                    setinput({
                                        ...input, [e.target.name]: e.target.value
                                    })
                                }} />
                        </div>

                        <button type="submit"
                            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                            Register
                        </button>

                        <p className="mt-4 text-sm text-center text-gray-600">
                            Already have an account? <a href="/login" className="text-indigo-600 hover:text-indigo-700">Login here</a>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register