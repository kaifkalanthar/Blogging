import React from 'react';
import '../../post.css';
const Blog = ({ title, content, cover }) => {
    return (
        <div className="post-container" >
            <h1 className="post-header" >{title}</h1>
            <img src={"http://localhost:4000/" + cover} className="post-img" alt="" />
            <div dangerouslySetInnerHTML={{ __html: content }} className="post-content" />
        </div>
    );
}

export default Blog;