const express = require('express')
const router = express.Router()
const Employer = require('../database/models/employer')
const User = require('../database/models/user')
const Job = require('../database/models/jobPost')
const passport = require('../passport')

router.post('/applicantProfile', (req, res) => {
    const { username, password, phone} = req.body;

    User.findOne({ username })
    .then(user => {
        console.log(req.body)
        const newApplicant = new Applicant({
            username: username,
            password: password,
            phone: phone
        })
        newApplicant.save() 
        user.applicant.push(newApplicant)
        user.save()
    })
    .catch(err => {
        throw err;
    })

    
})

module.exports = router;