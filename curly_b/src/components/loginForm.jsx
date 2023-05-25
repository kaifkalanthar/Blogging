import React from 'react';
import { NavLink } from 'react-router-dom';
import Form from './common/form';
import Joi from 'joi-browser';
import auth from '../service/authService';



class LoginForm extends Form {
    state = {
        data: { email: "", password: "" },
        errors: {}
    }

    schema = {
        email: Joi.string().required(),
        password: Joi.string().required()
    }
    doSubmit = async () => {
        try {
            const { data } = this.state;
            await auth.login(data.email, data.password);
            window.location = "/";


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
            <h1 className="form-header">Login to Experience more about the world.</h1>
                {this.renderInput("email", "youremail@gmail.com")}
                {this.renderInput("password", "password", "password")}
                {this.renderButton("Login")}
            <p className="sub">Don't have an account? <NavLink to='/register'>SignUp</NavLink></p>
            </form>
        );
    }
}

export default LoginForm;