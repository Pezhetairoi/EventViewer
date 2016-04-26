var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Users = mongoose.model('User');

module.exports = function() {
    passport.use(new LocalStrategy(function(username, password, done) {
        Users.findOne({username: username}).exec(function(error, user) {
            if(user && user.authenticate(password)) {
                return done(null, user);
            }else {
                return done(null, false);
            }
        });
    }));

    passport.serializeUser(function(user, done) {
        if(user) {
            done(null, user._id);
        }
    });

    passport.deserializeUser(function(id, done) {
        Users.findOne({_id: id}).exec(function(error, user) {
            if(user) {
                return done(null, user);
            }else{
                return done(null, false);
            }
        });
    });
};

