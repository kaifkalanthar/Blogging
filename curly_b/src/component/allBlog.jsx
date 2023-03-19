import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../common/cards';
import '../style/allBlog.css';




const Blogs = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/post").then(response => {
            response.json().then(posts => {
                setPosts(posts);
            })
        })
    }, [])
    return (
        <React.Fragment>

            <div id="box-menu">
                <div id="box-container">
                    <div id="search-box">
                        <input id="search" type="type" placeholder='search...' />
                        <i className='fa-solid fa-magnifying-glass' />
                    </div>
                    <Link id="new-post" to="/create-post/new-post">New Post</Link>
                </div>
            </div>
            <Cards posts={posts} />

        </React.Fragment>);
}

export default Blogs;