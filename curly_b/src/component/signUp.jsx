import React from 'react';
import Joi from 'joi-browser';
import Form from '../common/form';
import * as userService from '../services/userService';
class SignUp extends Form {
    state = {
        data: { username: "", name: "", password: "" },
        errors: {}
    }

    schema = {
        username: Joi.string().required().email().label("Username"),
        name: Joi.string().required().min(4).label("Name"),
        password: Joi.string().required().min(8).label("Password")
    }

    doSubmit = async () => {
        const { data } = this.state;
        await userService.register(data);
        window.location = "/login";
        alert("Login to continue...")
    }

    render() {
        return (
            <div id="form">
                <form id="form-container" onSubmit={this.handleSubmit}>
                    <h1>SignUp</h1>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("name", "Name")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("SignUp")}
                </form>
            </div>
        );
    }
}

export default SignUp;