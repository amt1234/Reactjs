import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class ForgotPassword extends Component {
    render() {
        return (
            <div className="login-div">
                <Paper className="paper-style-resetpassword">
                    <div className="App">
                        <div className="login-layout">
                            <h1> Reset Password </h1>
                        </div>
                        <div className="login-form">
                            <form>
                                {/* user resetpassword field */}
                                <div>
                                    <TextField
                                        id="restpassword-input"
                                        label="Rest your password"
                                        // className={classes.textField}
                                        type="password"
                                        autoComplete="current-password"
                                        margin="normal"
                                    />
                                </div>
                                <br />
                                <br />
                                <div>
                                    <Link style={{ textDecoration: 'none' }} to="/">
                                        <Button style={{ width: '350px', backgroundColor: '#fb0' }}>
                                            Confirm Password
                                        </Button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default ForgotPassword;