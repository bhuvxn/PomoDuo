const studyhoursRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const {response} = require('express');
const StudyHours = require('../models/StudyHours');
const User = require('../models/User');


//test route for getting all study hours
studyhoursRouter.get('/', async (request, response) => {
    const studyhours = await StudyHours.find({}).populate('user', {username: 1, name: 1});
    response.json(studyhours);
});
//get one users study hours based on user id
studyhoursRouter.get('/hours', async(request,response)=>{
    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    if (!request.token || !decodedToken.id) {
        return response.status(401).json({error: 'token missing or invalid'});
    }
    const user = await user.findById(decodedToken.id);
    const studyhours = await StudyHours.find({user: user._id});
    response.json(studyhours);
})



//post study hours based on user
studyhoursRouter.post('/', async (request, response) => {
    const decodedToken = jwt.verify(request.token, process.env.SECRET);

    if (!request.token || !decodedToken.id) {
        return response.status(401).json({error: 'token missing or invalid'});
    }

    const user = await User.findById(decodedToken.id);

    const studyhours = new StudyHours({
        date: new Date().toISOString().slice(0, 10),
        hours: request.body.hours,
        user: user._id
    });

    const savedStudyHours = await studyhours.save();
    user.studyHours = user.studyHours.concat(savedStudyHours._id);
    await user.save();

});

module.exports = studyhoursRouter;