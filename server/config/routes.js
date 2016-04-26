var auth = require('./auth.js');
var users = require('../controllers/users.js');
var courses = require('../controllers/courses.js');
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function(app) {
    //return a list of all users
    app.get('/api/users', auth.requiresRole('admin'), users.getUsers);

    //add new users route
    app.post('/api/users', users.createUser);

    //update current user route
    app.put('/api/users', users.updateUser);

    //return course-list
    app.get('/api/courses', courses.getCourses);

    //return course-details
    app.get('/api/courses/:id', courses.getCourseById);

    app.get('/partials/*', function(req, res) {
        res.render('../../public/app/' + req.params[0]);
    });

    app.post('/login', auth.authenticate);

    app.post('/logout', function(req, res) {
        req.logout();
        res.end();
    });

    app.all('/api/*', function(req, res) {
        res.send(404);
    });

//add route to deliver index page
    app.get('*', function(req, res) {
        res.render('index', {
            bootstrappedUser: req.user
        });
    });
}