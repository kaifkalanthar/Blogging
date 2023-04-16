import React from 'react';

const Button = ({ label, type, validate }) => {
    return (
        <button
            type={type}
            className="btn"
            id="form-btn"
            disabled={validate}>
            {label}
        </button>);
}

export default Button;