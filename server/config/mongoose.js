var mongoose = require('mongoose');
var userModel = require('../models/User.js');
var eventModel = require('../models/Event.js');

module.exports = function(config) {
    //connect to mongodb
    mongoose.connect(config.db);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function(){
        console.log('eventreg database opened');
    });

    userModel.createDefaultUsers();
    eventModel.createDefaultCourses();
 };

