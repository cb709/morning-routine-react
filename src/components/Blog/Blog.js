import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blog = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className='container blog-container'>
            {
                blogs.map(blog => <SingleBlog key={blog._id} blog = {blog}></SingleBlog>)
            }
        </div>
    );
};

export default Blog;