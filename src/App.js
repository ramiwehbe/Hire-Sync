import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
// components
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import ApplicantProfile from './components/applicant-profile'
import RecruiterProfile from './components/recruiter-profile'
import Navbar from './components/navbar'
import Home from './components/home'
import Posting from './components/job-posting';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      firstName: null,
      lastName: null,
      privilages: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          firstName: response.data.user.firstName,
          lastName: response.data.user.lastName,
          privilages: response.data.user.privilages
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
   
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <p>Join the party, {this.state.firstName} {this.state.lastName} and you are {this.state.privilages}!</p>
        }
        {/* Routes to different components */}
        <Route
          exact path="/"
          component={Home} />
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/applicantProfile"
          render={() =>
            <ApplicantProfile
            
            />}
        />
        <Route
          path="/recruiterProfile"
          render={() =>
            <RecruiterProfile
              username={this.state.username}
              skillset={this.state.skillset}
            />}
        />
        <Route
          path="/jobPosting"
          render={() =>
            <Posting
            username={this.state.username}
            skillset={this.state.skillset}
              
            />}
        />
      </div>
    );
  }
}

export default App;
