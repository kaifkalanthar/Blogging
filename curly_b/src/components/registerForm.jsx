import React from 'react';
import { NavLink } from 'react-router-dom';
import Joi from 'joi-browser';
import Form from './common/form';
import * as userService from '../service/userService';
import auth from '../service/authService';


class RegisterForm extends Form {
    state = {
        data: { username: "", email: "", password: "" },
        errors: {}
    }

    schema = {
        username: Joi.string().min(3).max(10).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(5).required()
    }

    doSubmit = async () => {
        try {
            const { headers } = await userService.register(this.state.data);
            auth.loginWithJwt(headers["x-auth-token"]);
            window.location = '/';
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.email = ex.response.data;
                this.setState({ errors });
            }
        }
    }

    render() {
        return (
            <form className="form-container" onSubmit={this.handleSubmit}>
                <h1 className="form-header">Sign up to join with World’s greatest community</h1>
                {this.renderInput("username", "yourname")}
                {this.renderInput("email", "youremail@gmail.com")}
                {this.renderInput("password", "password", "password")}
                {this.renderButton("SignUp")}
                <p className="sub">Already have an account? <NavLink to='/login'>Login</NavLink></p>
            </form>
        );
    }
}

export default RegisterForm;