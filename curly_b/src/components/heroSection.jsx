import React from 'react';

const HeroSection = () => {
    return (
        <div className="hero-container">
            <div className="header-content">
                <h1 className="hero-header">Explore the World,
                    By exploring our<br /> Blogs.</h1>
                <button className="btn" id="explore-btn">Explore</button>
            </div>
            <div className="body-content">
                <p className="hero-content">source of personal growth and
                    development. By consistently writing and sharing your thoughts,
                    you can refine your communication skills, develop your
                    writing style,
                    and learn more about yourself and your passions.</p>
                <input className='input' placeholder='youremail@gmail.com' /><br />
                <button className="btn">Subscribe</button>
            </div>
        </div>
    );
}

export default HeroSection;