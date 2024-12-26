import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const Login = () => {
    const navigate = useNavigate(); 

    const submitHandler = async (e) => {
        e.preventDefault(); // Correctly prevent the default form submission
        const username = e.target.username.value;
        const password = e.target.password.value;

        try {
            const res = await axios.post("http://localhost:4000/login", {
                username, 
                password
            });
            Cookies.set("token",res.data.token)
            navigate("/"); // Navigate to home on successful login
        } catch (error) {
            console.error("Login failed:", error);
            // Optionally, you can set an error state to display an error message to the user
        }
    }
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl font-bold text-center mb-6">Login to Your Account</h2>
                    <form action="/login" method="POST" onSubmit={submitHandler}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-semibold text-gray-700">Username</label>
                            <input type="text" id="username" name="username" placeholder="Enter your username"
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
                            <input type="password" id="password" name="password" placeholder="Enter your password"
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="remember" className="inline-flex items-center text-sm text-gray-700">
                                <input type="checkbox" id="remember" name="remember" className="form-checkbox h-5 w-5 text-indigo-600" />
                                <span className="ml-2">Remember Me</span>
                            </label>
                        </div>

                        <button type="submit"
                            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                            Login
                        </button>

                        <p className="mt-4 text-sm text-center text-gray-600">
                            Don't have an account? <a href="/register" className="text-indigo-600 hover:text-indigo-700">Sign up here</a>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login