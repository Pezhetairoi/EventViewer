var mongoose = require('mongoose');
var userModel = require('../models/User.js');
var courseModel = require('../models/Course.js');

module.exports = function(config) {
    //connect to mongodb
    mongoose.connect(config.db);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function(){
        console.log('meanvision database opened');
    });

    userModel.createDefaultUsers();
    courseModel.createDefaultCourses();
 };

