import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import JobInputs from "./manage-jobs"
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
    }
      
   
      
    render() {    
        return (
            console.log("Applicant Skillset: ", JobInputs.skillset),
            <form>
                <label
                type="text"
                value={this.props.username}
                />
                <label>
                Skill: {this.skillset}
                <h2 value={JobInputs} />
                </label>
                
                <button>Submit Profile</button>
            </form>
        )
    }
}

export default ApplicantProfile;
