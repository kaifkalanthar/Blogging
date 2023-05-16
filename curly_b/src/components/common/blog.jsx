import React from 'react';
import '../../post.css';
const Blog = ({ title, content, cover }) => {
    return (
        <div className="post-container" >
            <h1 className="post-header" >{title}</h1>

            <img src={"https://curly-b-api.onrender.com/" + cover} className="post-img" alt="" />

            <img src={"https://curly-b-xgc0.onrender.com/" + cover} className="post-img" alt="" />

            <div dangerouslySetInnerHTML={{ __html: content }} className="post-content" />
        </div>
    );
}

export default Blog;
