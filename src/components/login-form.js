import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

let privilage = '';

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            message: '',
            error1: true,
            redirect: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }
    setRedirect = () => {
		this.setState({
		  redirect: true
		})
    }
    
	renderRedirect = (privilages) => {
        if (this.state.redirect) {
            if (privilages === "posting") {
                return <Redirect to = '/recruiterProfile' />
            }
            else
            {
                return <Redirect to = '/applicantProfile' />
            }
        }	
	}
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/user/login', {
                username: this.state.username,
                password: this.state.password,
                privilages: this.state.privilages
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username,
                        privilages: response.data.privilages,
                        firstName: response.data.firstName,
                        lastName: response.data.lastName
                    })
                    // update the state to redirect to home
                    this.setState({ message: '' });
                    privilage = response.data.privilages
                    this.setRedirect();
                }
            }).catch(error => {
                this.setState ({
                    error1: false
                });
                console.log('login error: ')
                console.log(error);
                
            })
            
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div>
                    <h4>Login</h4>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="username">Username: </label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="password">Password: </label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        
                        <div className="form-group ">
                            <div className="col-7"></div>
                            {this.renderRedirect(privilage)}
                            <button
                                className="btn btn-success col-1 col-mr-auto"
                                onClick={this.handleSubmit}
                                type="submit"
                            >Login</button>
                        </div>
                        <div className="error" style={{display: this.state.error1 ? 'none' : 'block'}}>Username or Password are Invalid
				        </div>
                    </form>
                </div>
            )
        }
    }
}

export default LoginForm
