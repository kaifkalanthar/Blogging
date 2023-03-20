import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import '../style/postPage.css';

export default function PostPage() {
    const [postInfo, setPostInfo] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`).then(response => {
            response.json().then(postInfo => {
                setPostInfo(postInfo);
            })
        });
    }, []);

    return (
        <React.Fragment>
            <div id="post">
                <div id="post-container">
                    <h1>{postInfo.title}</h1>
                    <img id="cover-img" src={`http://localhost:4000/${postInfo.cover}`} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postInfo.content }} id="content" />
            </div>

        </React.Fragment>
    );
} 
