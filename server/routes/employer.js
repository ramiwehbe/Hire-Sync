const express = require('express')
const router = express.Router()
const Employer = require('../database/models/employer')
const User = require('../database/models/user')
const Job = require('../database/models/jobPost')
const passport = require('../passport')

router.post('/recruiterProfile', (req, res) => {
    const { companyName, hrEmail, phone, username } = req.body;

    User.findOne({ username })
    .then(user => {
        console.log(req.body)
        const newEmployer = new Employer({
            companyName: companyName,
            hrEmail: hrEmail,
            phone: phone
        })
        newEmployer.save() 
        user.employer.push(newEmployer)
        user.save()
    })
    .catch(err => {
        throw err;
    })

    
})

router.post('/recruiterProfile/addJob', (req, res) => {
    const { index, title, description, username, skillset } = req.body;
    console.log(req.body);
    
    User.findOne({ username })
    .then(user => {
        console.log('user', user)
        Employer.findById(user.employer[0])
        .then(employer => {
            employer.jobs.push(
                new Job({
                    title,
                    description,
                    skillset
                }));
                employer.save();
            res.send(employer)
        })
        .catch(err => {throw err})
   
    })
    .catch(err => {
        throw err;
    })

    
})
module.exports = router;