
import React from 'react';

const Input = ({ type, name, placeholder, errors, onChange }) => {
    return (
        <>
            <input
                className="input"
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
            /><br />
            {errors && <p style={{ color: "red", fontSize: "12px" }}>{errors[name]}</p>}
        </>
    );
}

export default Input;