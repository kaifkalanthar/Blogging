import React from 'react';

const Button = ({ label, disabled }) => {
    return (
        <button type="submit" id="submit-btn" disabled={disabled}>{label}</button>
    );
}

export default Button;