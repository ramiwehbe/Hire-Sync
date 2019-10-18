import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			firstName: '',
			lastName: '',
			password: '',
			privilages: '',
			confirmPassword: '',
			redirect: false,
			error1: true,		
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	setRedirect = () => {
		this.setState({
		  redirect: true
		})
	}

	renderRedirect = () => {
		if (this.state.redirect) {
		  return <Redirect to='/login' />
		}
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			privilages: this.state.privilages
		})
			.then(response => {
				if (!response.data.error) {
					console.log('successful signup')
					this.setRedirect();
					this.renderRedirect();
					
				} else {
					this.setState ({
						error1: false
					});
					console.log('username already taken');
				}
				
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


render() {
	return (
		<div className="SignupForm">
			<h4>Sign up</h4>
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
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="firstName">First Name: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="text"
							id="firstName"
							name="firstName"
							placeholder="First Name"
							value={this.state.firstName}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="lastName">Last Name: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="text"
							id="lastName"
							name="lastName"
							placeholder="Last Name"
							value={this.state.lastName}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="privilages">Role: </label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <select className="form-input"
                                placeholder="Applying / Posting"
                                type="text"
                                name="privilages" 
                                value={this.state.privilages}
                                onChange={this.handleChange}
                                >	
									<option value="">Click Here</option>
                                    <option value="applying">Applying for a job</option>
                                    <option value="posting">Recruiting</option>
                                </select>
                                
                            </div>
				        </div>
				<div className="form-group">
					<div className="col-7"></div>
					{this.renderRedirect()}
					<button
						className="btn btn-success col-1 col-mr-auto"
						onClick={this.handleSubmit}
						type="submit"
					>Sign up</button>
				</div>
				<div className="error" style={{display: this.state.error1 ? 'none' : 'block'}}>Username is already taken
				</div>
			</form>
		</div>

	)
}
}

export default Signup
