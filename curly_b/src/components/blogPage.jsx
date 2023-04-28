import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import http from '../service/httpService';
import Blog from './common/blog';


const BlogPage = () => {
    const [postInfo, setPostInfo] = useState(false);
    const { id } = useParams();
    const getData = async () => {
        const { data } = await http.get(`https://curly-b-xgc0.onrender.com/post/${id}`);
        setPostInfo(data);
    }
    useEffect(() => {
        getData();
    });
    return (
        <Blog
            title={postInfo.title}
            content={postInfo.content}
            cover={postInfo.cover}
        />
    );
}

export default BlogPage;
