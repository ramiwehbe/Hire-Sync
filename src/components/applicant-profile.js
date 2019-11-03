import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import JobInputs from "./manage-jobs"
import Posting from "./job-posting"

class ApplicantProfile extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            skillset: [{ username: '' }],
            proficiency: [{ username: ''}],
            yearsExperience: [{ username: ''}],
            achievements: [{ username: ''}]
        };
        console.log("Applicant Skillset: ", Posting)
    }
      
    
      
    render() {    
        return (
            
            <form>
                <label
                type="text"
                value={this.props.username}
                />
                <label>
                Skill: {Posting}
                <h2 value={Posting} />
                </label>
                
                <button>Submit Profile</button>
            </form>
            
        )
    }
}

export default ApplicantProfile;
