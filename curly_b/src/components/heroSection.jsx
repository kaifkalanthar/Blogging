import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';



const HeroSection = () => {
    const [email, setEmail] = useState('');
    const notify = () => {
        if (email === '')
            toast.error('Invalid Input');
        else
            toast.success('Subscribed Successfully, You will be notified');
    }
    return (
        <div className="hero-container">
            <div className="header-content">
                <h1 className="hero-header">Explore the World,
                    By exploring our<br /> Blogs.</h1>
                <NavLink to='/blog' className="btn" id="explore-btn">Explore</NavLink>
            </div>
            <div className="body-content">
                <p className="hero-content">source of personal growth and
                    development. By consistently writing and sharing your thoughts,
                    you can refine your communication skills, develop your
                    writing style,
                    and learn more about yourself and your passions.</p>
                <input className='input' placeholder='youremail@gmail.com' onChange={(e) => setEmail(e.currentTarget.value)} /><br />
                <button className="btn" onClick={notify}>Subscribe</button>
                <ToastContainer />
            </div>
        </div>
    );
}

export default HeroSection;