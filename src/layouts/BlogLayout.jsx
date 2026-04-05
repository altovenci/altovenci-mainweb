import React from 'react'
import Blog from '../pages/blog'
import { Outlet } from 'react-router-dom'

const BlogLayout = () => {
    return (
        <>
            <Blog />
            <div>
                <Outlet />
            </div>
        </>
    )
}
export default BlogLayout