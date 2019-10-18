const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

const jobPostSchema = new Schema({
    title: { type: String, unique: false, required: false},
    description: { type: String, unique: false, required: false},
    skillset: [{
        skill: { type: String, unique: false, required: false} , 
        proficiency: { type: String, unique: false, required: false}, 
        years: { type: String, unique: false, required: false}, 
        importance: { type: String, unique: false, required: false}
    }]
})
const JobPost = mongoose.model("JobPost", jobPostSchema)
module.exports = JobPost;