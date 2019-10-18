import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class RecruiterProfile extends React.Component {
    state = {
        companyName: "",
        hrEmail: "",
        phone: "",
        redirect: false
    };
    setRedirect = () => {
        this.setState ({
            redirect: true
        })
    }
	renderRedirect = () => {
        {
            if (this.state.redirect) {
                return <Redirect to = '/jobPosting' />
            }            
        }
    }
    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
    };
    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        if (!this.state.companyName || !this.state.hrEmail || !this.state.phone) {
          alert("Please fill out all of the fields!");
          
        } else {
            this.setRedirect();
            let data = {
                companyName: this.state.companyName,
                hrEmail: this.state.hrEmail,
                phone: this.state.phone,
                username: this.props.username
            }
            axios.post('/employer/recruiterProfile', data);
        }
        
    };
    render() {
        return (
        <form>
            <label htmlFor="companyName">Company Name</label> 
            <input type="text" name="companyName" id="companyName"
                value = {this.state.companyName} 
                onChange={this.handleInputChange}
                required/>
            <legend>Contact information</legend>
            <label htmlFor="hrEmail">HR Contact Email</label> 
            <input type="email" name="hrEmail" id="hrEmail"
                value = {this.state.hrEmail} 
                onChange={this.handleInputChange}
                placeholder="Email Address"
                required/>
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone"
                value = {this.state.phone}
                onChange={this.handleInputChange}
                placeholder="123-456-7890"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required />
            <span class="validity"></span>
            <div className="form-group ">
            {this.renderRedirect()}
                <button onClick={this.handleFormSubmit}>Save Company Profile</button>
            </div>
            
        </form>
        )
    }
}
export default RecruiterProfile



