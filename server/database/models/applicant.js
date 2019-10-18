const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

const applicantSchema = new Schema({
    username: { type: String, unique: false, required: true},
    password: { type: String, unique: false, required: true},
    firstName: { type: String, unique: false, required: false},
    lastName: { type: String, unique: false, required: false},
    applications: { type: Array, unique: false, required: false}
})  
const Applicant = mongoose.model("Employer", applicantSchema);
module.exports = Applicant;