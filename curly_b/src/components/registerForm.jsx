import React from 'react';
import { NavLink } from 'react-router-dom';

const RegisterForm = () => {
    return (
        <div className="form-container">
            <h1 className="form-header">Sign up to join with World’s greatest community</h1>
            <input type="text" className="input" placeholder='yourname' /><br />
            <input type="text" className="input" placeholder='yourname@gmail.com' /><br />
            <input type="password" className="input" placeholder='password' /><br />
            <button className="btn" id="form-btn">SignUp</button>
            <p className="sub">Already have an account? <NavLink to='/login'>Login</NavLink></p>
        </div>
    );
}

export default RegisterForm;