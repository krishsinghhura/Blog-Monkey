import React from 'react'

const BlogCard = () => {
  return (
    <>
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Blog Title Goes Here</div>
            <p className="text-gray-700 text-base mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            </p>
            <div className="flex justify-between text-sm text-gray-500">
                <span>By <strong>John Doe</strong></span>
                <span>January 1, 2024</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default BlogCard