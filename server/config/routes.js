var auth = require('./auth.js');
var users = require('../controllers/users.js');
var events = require('../controllers/events.js');
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function(app) {
    //return a list of all users
    app.get('/api/users', auth.requiresRole('admin'), users.getUsers);

    //add new users route
    app.post('/api/users', users.createUser);

    //update current user route
    app.put('/api/users', users.updateUser);

    //return event-list
    app.get('/api/events', events.getEvents);

    //create new event
    app.post('/api/events', events.createEvent);

    //return event-details
    app.get('/api/events/:id', events.getEventById);

    //update event
    app.put('/api/events/:id', events.updateCurrentEvent);


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