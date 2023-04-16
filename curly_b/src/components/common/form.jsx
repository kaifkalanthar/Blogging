import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import Button from './button';

class Form extends Component {
    state = {
        data: {},
        errors: {}
    }
    handleChange = ({ currentTarget: input }) => {
        const data = { ...this.state.data };
        data[input.name] = input.value;
        const errors = { ...this.state.errors };
        errors[input.name] = this.validateProperty(input);
        this.setState({ data, errors });
    }
    validate = () => {
        const { data } = this.state;
        const options = { abortEarly: false }
        const res = Joi.validate(data, this.schema, options);

        if (!res.error) return null;

        const errors = {};
        for (let item of res.error.details)
            errors[item.path[0]] = item.message;
        return errors;
    }

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    }
    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} })

        this.doSubmit();
    }

    renderInput = (name, placeholder, type = "text") => {
        const { data, errors } = this.state;
        return <Input
            type={type}
            name={name}
            value={data[name]}
            errors={errors}
            placeholder={placeholder}
            onChange={this.handleChange}
        />
    }

    renderButton = (label, type = "submit") => {
        return <Button
            type={type}
            label={label}
            validate={this.validate()}
        />
    }
}

export default Form;