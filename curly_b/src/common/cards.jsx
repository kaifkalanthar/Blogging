import React from 'react';
import { Link } from 'react-router-dom';
import '../style/card.css';

function Cards({ posts }) {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {posts.map(post => (
                <div className="col" key={post._id}>
                    <div className="card">
                        <img src={"http://localhost:4000/" + post.cover} className="card-img-top" id="card-img" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">
                                {post.summary}
                            </p>
                            <Link to={`/blog/${post._id}`} id="read-btn" >Read</Link>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
}

export default Cards;