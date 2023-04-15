import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
    return (
        <div className="form-container">
            <h1 className="form-header">Login to Experience more about the world.</h1>
            <input type="text" className="input" placeholder='yourname@gmail.com' /><br />
            <input type="password" className="input" placeholder='password' /><br />
            <button className="btn" id="form-btn">Login</button>
            <p className="sub">Don't have an account? <NavLink to='/register'>SignUp</NavLink></p>
        </div>
    );
}

export default LoginForm;