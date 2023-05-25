import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import http from '../service/httpService';
import apiUrl from '../config.json';
import CardSkeleton from './SkeletonComponent/cardSkeleton';
const AllBlogs = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
    const { apiUrl: ApiUrl } = apiUrl;
    const apiEndpoint = ApiUrl + "post";

    const getData = async () => {
        setIsLoading(true);
        const { apiUrl: ApiUrl } = apiUrl;
        const apiEndpoint = ApiUrl + "api/post";
        await http.get("https://curly-b-api.onrender.com/post")
            .then(res => {
                setData(res.data);
                setIsLoading(false);
            });
    }
    useEffect(() => {
        getData();
    }, []);
    
    return ( 
        <div className="blogs-container">
            {isLoading && skeletons.map(skeleton => <CardSkeleton key={skeleton} />)}
            {data.slice(0).reverse().map(d => (
                <div className="blog-card" key={d._id}>
                    <img src={ApiUrl + d.cover} alt="" className="card-img" />
                    <div className="card-content">
                        <h2 className="blog-title">{d.title}</h2>
                        <p className="timestamp">MohamedKaif. 31 Jan</p>
                        <p className="blog-description">{d.summary}</p>
                        <NavLink className="btn" to={`/blog/${d._id}`}>More...</NavLink>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default AllBlogs;
