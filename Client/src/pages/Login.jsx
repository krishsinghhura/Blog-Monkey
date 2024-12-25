import React from 'react'

const Login = () => {
    const submitHandler=()=>{
        e.preventdefault();
    }
  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold text-center mb-6">Login to Your Account</h2>
            <form action="#" method="POST"onClick={()=>{
                    submitHandler(e);
                }}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email"
                           className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password"
                           className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>

                <div className="mb-6">
                    <label htmlFor="remember" className="inline-flex items-center text-sm text-gray-700">
                        <input type="checkbox" id="remember" name="remember" className="form-checkbox h-5 w-5 text-indigo-600"/>
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