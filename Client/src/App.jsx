import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import AddBlog from './pages/AddBlog'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addblog" element={<AddBlog />} />
      </Routes>
    </>
  )
}

export default App
