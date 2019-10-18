import React from "react"
import axios from "axios";
import JobInputs from "./manage-jobs"

class Posting extends React.Component {

    state = {
        skillset: [{
            skill: "",
            proficiency: "",
            years: "",
            importance: ""
        }],
        title: "",
        description: ""      
    }

    handleChange = (e) => {
        if (["skill", "proficiency", "years", "importance"].includes(e.target.className) ) {
          let skillset = [...this.state.skillset]
          skillset[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
          this.setState({ skillset }, () => console.log(this.state.skillset))
        } else {
          this.setState({ [e.target.name]: e.target.value.toUpperCase() })
        }
    }
    
    addSkill = (e) => {
        this.setState((prevState) => ({
          skillset: [...prevState.skillset, {skill:"", proficiency: "", years: "", importance: "" }],
        }));
    }

    handleSubmit = (e) => { 
        e.preventDefault()
        let data = {
            username: this.props.username,
            title: this.state.title,
            description: this.state.description,
            skillset: this.state.skillset
        }
        axios.post('/employer/recruiterProfile/addJob', data);
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    render() {
        let {title, description, skillset} = this.state
        return (
            <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                <label htmlFor="title">Title</label> 
                <input type="text" name="title" id="title" 
                    value={title}/>
                <label htmlFor="description">Description</label> 
                <input type="text" name="description" id="description" 
                    value={description}/>
                <button onClick={this.addSkill}>Add required skills</button>
                <JobInputs skillset={skillset} />
                <input type="submit" value="Submit" /> 
            </form>
        )
    }
}

export default Posting; 
        