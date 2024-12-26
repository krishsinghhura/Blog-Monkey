import React from 'react'

const BlogCard = (data) => {
  return (
    <>
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{data.title}</div>
            <p className="text-gray-700 text-base mb-4">
                {data.content}
            </p>
            <div className="flex justify-between text-sm text-gray-500">
                <span>By <strong>{data.author}</strong></span>
                <span>January 1, 2024</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default BlogCard