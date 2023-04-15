import React from 'react';
import saul from '../assets/saul.webp';
const AllBlogs = () => {
    return ( 
        <div className="blogs-container">
            <div className="blog-card">
                <img src={saul} alt="" className="card-img" />
                <div className="card-content">
                    <h2 className="blog-title">All About Walter</h2>
                    <p className="timestamp">MohamedKaif. 31 Jan</p>
                    <p className="blog-description">an American crime drama television series created and produced by Vince Gilligan. 
                    Set and filmed in Albuquerque, New Mexico, the series follows Walter White</p>
                    <button className="btn">More...</button>
                </div>
            </div>
            <div className="blog-card">
                <img src={saul} alt="" className="card-img" />
                <div className="card-content">
                    <h2 className="blog-title">All About Walter</h2>
                    <p className="timestamp">MohamedKaif. 31 Jan</p>
                    <p className="blog-description">an American crime drama television series created and produced by Vince Gilligan. 
                    Set and filmed in Albuquerque, New Mexico, the series follows Walter White</p>
                    <button className="btn">More...</button>
                </div>
            </div>
            <div className="blog-card">
                <img src={saul} alt="" className="card-img" />
                <div className="card-content">
                    <h2 className="blog-title">All About Walter</h2>
                    <p className="timestamp">MohamedKaif. 31 Jan</p>
                    <p className="blog-description">an American crime drama television series created and produced by Vince Gilligan. 
                    Set and filmed in Albuquerque, New Mexico, the series follows Walter White</p>
                    <button className="btn">More...</button>
                </div>
            </div>
            <div className="blog-card">
                <img src={saul} alt="" className="card-img" />
                <div className="card-content">
                    <h2 className="blog-title">All About Walter</h2>
                    <p className="timestamp">MohamedKaif. 31 Jan</p>
                    <p className="blog-description">an American crime drama television series created and produced by Vince Gilligan. 
                    Set and filmed in Albuquerque, New Mexico, the series follows Walter White</p>
                    <button className="btn">More...</button>
                </div>
            </div>
            
        </div>
     );
}
 
export default AllBlogs;