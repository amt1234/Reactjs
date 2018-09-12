import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                name: '',
                email: '',
                password: '',
                phoneNumber: '',
                date: ''
            },
            submitted: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log("handleChange");
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        console.log(formData[event.target.name]);

        this.setState({ formData });
    }

    handleSubmit(event) {
        console.log("handleSubmit");
        const { formData } = this.state;
        console.log("form data: ");
        console.log(formData);
       
            if (formData.name === ""||formData.email===""||formData.password===""||formData.phoneNumber==="") {
                console.log("feild false" + formData[event.target.name]);
                this.setState({ submitted: false });
            } else {
                console.log("feild true" + formData[event.target.name]);
                this.setState({ submitted: true });
            }        
    }

    render() {
        const { formData } = this.state;
        return (
            <div className="login-div">
                <Paper className="paper-style-register">
                    <div className="App">
                        <div className="login-layout">
                            <h1>Register</h1>
                        </div>
                        <div className="login-form">
                            <ValidatorForm
                                ref="form"
                                onSubmit={this.handleSubmit}
                            >
                                {/* user name field */}
                                <div>
                                    <TextValidator
                                        id="name-input"
                                        label="Enter your name"
                                        name="name"
                                        onChange={this.handleChange}
                                        value={formData.name}
                                        validators={['required']}
                                        errorMessages={['this field is required']}
                                        margin="normal"
                                    />
                                </div>

                                {/* user email field */}
                                <div>
                                    <TextValidator
                                        id="username-input"
                                        label="Enter Username"
                                        name="email"
                                        onChange={this.handleChange}
                                        value={formData.email}
                                        validators={['required', 'isEmail']}
                                        errorMessages={['this field is required', 'email is not valid']}
                                        margin="normal"
                                    />
                                </div>

                                {/* user password input */}
                                <div>
                                    <TextValidator
                                        id="password-input"
                                        label="Enter Password"
                                        name="password"
                                        type="password"
                                        onChange={this.handleChange}
                                        value={formData.password}
                                        validators={['required']}
                                        errorMessages={['this field is required']}
                                        autoComplete="current-password"
                                        margin="normal"
                                    />
                                </div>

                                {/* user phoneNumber field */}
                                <div>
                                    <TextValidator
                                        id="phoneNumber-input"
                                        label="Enter your phone Number"
                                        name="phoneNumber"
                                        type="tel"
                                        onChange={this.handleChange}
                                        value={[formData.phoneNumber]}
                                        validators={['required']}
                                        errorMessages={['this field is required']}
                                        margin="normal"
                                    />
                                </div>

                                {/* user Birthdate field */}
                                <div>
                                    <TextValidator
                                        id="birthdate-input"
                                        // className={classes.textField}
                                        type="date"
                                        name="date"
                                        onChange={this.handleChange}
                                        value={[formData.date]}
                                        validators={['required']}
                                        errorMessages={['this field is required']}
                                        margin="normal"
                                    />
                                </div>
                                <br />
                                <br />
                                <div>
                                    {/* <Link  disabled style={{ textDecoration: 'none' }} to="/"> */}
                                    <Button raised
                                        type="submit"
                                        style={{ width: '350px', backgroundColor: '#fb0' }}>
                                        Registration Confirm
                                        </Button>
                                    {/* </Link> */}
                                </div>
                            </ValidatorForm>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default Register;