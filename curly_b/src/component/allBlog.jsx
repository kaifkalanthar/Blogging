import React from 'react';
import { Link } from 'react-router-dom';
import '../style/allBlog.css';

const Blogs = () => {
    return (<div>
        <h1>Blogs</h1>
        <Link id="new-post" to="/create-post/new-post">New Post</Link>
    </div>);
}

export default Blogs;