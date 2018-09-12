import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                email: '',
                password: ''
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
        this.setState({ formData });
    }

    handleSubmit(event) {
        console.log("handleSubmit");
        this.setState({ submitted: true });
    }

    render() {
        const { formData } = this.state;
        return (
            <div className="login-div">
                <Paper className="paper-style-login">
                    <div className="App">
                        <div className="login-layout">
                            <h1> Login</h1>
                        </div>
                        <div className="login-form">
                            <ValidatorForm
                                ref="form"
                                onSubmit={this.handleSubmit}
                            >

                                {/* user input field */}
                                <div>
                                    <TextValidator
                                        id="username-input"
                                        label="Enter Username"
                                        name="email"
                                        onChange={this.handleChange}
                                        value={formData.email}
                                        // type="text"
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
                                <br />
                                <br />
                                <div>
                                    <Link disabled style={{ textDecoration: 'none' }} to="/navbar">
                                        <Button raised
                                            type="submit"
                                            // disabled={submitted}
                                            style={{ width: '350px', backgroundColor: '#fb0' }}>

                                            {/* {
                                            (submitted && 'Your form is submitted!')
                                            || (!submitted && 'Submit')
                                        } */}
                                            Sign In
                                        </Button>
                                    </Link>
                                </div>
                            </ValidatorForm>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="login-form">
                        <Link style={{ textDecoration: 'none', marginLeft: '40px' }} to="/register"> SignUp </Link>
                        <Link style={{ textDecoration: 'none', marginLeft: '90px' }} to="/forgotPassword"> Forgot Password </Link>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default Login;