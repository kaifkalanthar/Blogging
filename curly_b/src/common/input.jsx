import React from 'react';
import '../style/signUp.css';
const Input = ({ type, name, placeholder, error, handleChange }) => {
    return (
        <React.Fragment>
            <input className="text-field"
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={handleChange}
            />
            {error && <div id="alert-box"><p id="alert">{error[name]}</p></div>}
        </React.Fragment>
    );
}

export default Input;