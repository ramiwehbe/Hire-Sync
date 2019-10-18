const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

const employerSchema = new Schema({
    companyName: { type: String, unique: false, required: true},
    hrEmail: { type: String, unique: false, required: true},
    phone: { type: String, unique: false, required: false},
    jobs: { type: Array, unique: false, required: false}
})  
const Employer = mongoose.model("Employer", employerSchema);
module.exports = Employer;