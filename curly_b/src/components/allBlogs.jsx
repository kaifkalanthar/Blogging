import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import http from '../service/httpService';
import apiUrl from '../config.json';
const AllBlogs = () => {
    const [data, setData] = useState([]);
    const { apiUrl: ApiUrl } = apiUrl;
    const apiEndpoint = ApiUrl + "post";

    const getData = async () => {
        const { apiUrl: ApiUrl } = apiUrl;
        const apiEndpoint = ApiUrl + "api/post";
        const { data: res } = await http.get("https://curly-b-api.onrender.com/post");

        setData(res);
        console.log(res);
    }
    useEffect(() => {
        getData();

    }, [data]);
    
    return ( 
        <div className="blogs-container">
            {data.map(d => (
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
