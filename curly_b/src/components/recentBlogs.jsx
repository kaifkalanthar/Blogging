import React, { useEffect, useState } from 'react';
import blogpost1 from '../assets/blog-post1.svg';
import blogpost2 from '../assets/blog-post2.jpg';
import blogpost3 from '../assets/blog-post3.jpg';
import http from '../service/httpService';
import apiUrl from '../config.json'
import { NavLink } from 'react-router-dom';
import CardSkeleton from './SkeletonComponent/cardSkeleton';

const RecentBlogs = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const skeletons = [1, 2, 3, 4];
    const { apiUrl: ApiUrl } = apiUrl;
    const apiEndpoint = ApiUrl + "post";

    const getData = async () => {
        setIsLoading(true);
        await http.get("https://curly-b-api.onrender.com/post")
            .then(res => {
                setData(res.data);
                setIsLoading(false);
            });
    }
    useEffect(() => {
        getData();

    }, []);
    const len = data.length;
    const blog_1 = data[len - 1];
    const blog_2 = data[len - 2];
    const blog_3 = data[len - 3];
    return (
        <>

            <div className='recent-blogs'>
            <h2 className="recent-blogs-header">Recent Blog Post</h2>
            <div className="recent-blogs-container">
                    {isLoading && skeletons.map(skeleton => <center><CardSkeleton key={skeleton} /></center>)}
                    {blog_1 && blog_2 && <><div className="most-recent">
                        <img src={blogpost1} alt="/" className="l-img" />
                    <div className="m-blog-content">
                        <p className="timestamp">MohamedKaif. 20 Jan 2034</p>
                            <h3 className="blog-title" id="blog-title-L">{blog_1.title}</h3>
                            <p className="blog-description" id="blog-description-L">{blog_1.summary}</p>
                            <NavLink to={`/blog/${blog_1._id}`} className="btn">More...</NavLink>
                    </div>
                </div>
                <div className="recent-two">
                            <div className="recent-two-container" key={blog_2._id}>
                                <img src={blogpost2} alt="/" className="m-img" />
                                <div className="blog-content" style={{ padding: '10px' }}>
                                    <h3 className="blog-title" id="blog-title-m">{blog_2.title}</h3>
                                    <p className="timestamp">MohamedKaif. 20 Jan 2034</p>
                                    <p className="blog-description" id="blog-description-m">{blog_2.summary}</p>
                                    <NavLink className="btn" to={`/blog/${blog_2._id}`}>More...</NavLink>
                                </div>
                            </div>
                            <div className="recent-two-container" key={blog_3._id} >
                                <img src={blogpost3} alt="/" className="m-img" />
                                <div className="blog-content" style={{ padding: '10px' }}>
                                    <h3 className="blog-title" id="blog-title-m">{blog_3.title}</h3>
                                    <p className="timestamp">MohamedKaif. 20 Jan 2034</p>
                                    <p className="blog-description" id="blog-description-m">{blog_3.summary}</p>
                                    <NavLink className="btn" to={`/blog/${blog_3._id}`}>More...</NavLink>
                                </div>
                            </div>

                        </div>
                    </>}
                </div>
            </div>

        </>
    );
}

export default RecentBlogs;