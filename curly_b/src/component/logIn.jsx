import React, { Component } from 'react';
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../userContext";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUserInfo } = useContext(UserContext);
    async function login(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
        if (response.ok) {
            response.json().then(userInfo => {
                setRedirect(true);
            });
        } else {
            alert('wrong credentials');
        }
        window.location = "/"
    }


    return (
        <div id="form">
            <form id="form-container" onSubmit={login}>
                <h1>Login</h1>
                <input type="text"
                    className="text-field"
                    placeholder="username"
                    value={username}
                    onChange={ev => setUsername(ev.target.value)} />
                <input className="text-field"
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={ev => setPassword(ev.target.value)} />
                <button id="submit-btn">Login</button>
            </form>
        </div>

    );
}
