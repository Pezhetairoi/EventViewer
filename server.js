/**
 * Created by sijiehao on 16/04/2016.
 */
var express = require('express');
var stylus = require('stylus');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//set up node environment variable
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'production';

var app = express();

function compile(str, path) {
    return stylus(str).set('filename', path);
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: compile
}));

app.use(express.static(__dirname + '/public'));

//connect to mongodb
if(env === 'development') {
    mongoose.connect('mongodb://localhost/meanvision');
}else{
    mongoose.connect('mongodb://sijiehao:Aimar1103@ds011261.mlab.com:11261/meanvision');
}


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log('meanvision database opened');
});


//configure view engines
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.get('/partials/:partialPath', function(req, res) {
    res.render('partials/' + req.params.partialPath);
});

//create a mongoose schema
var messageSchema = mongoose.Schema({message: String });
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;

Message.findOne().exec(function(error, messageDoc) {
    mongoMessage = messageDoc.message;
});


//add route to deliver index page
app.get('*', function(req, res) {
    res.render('index', {
        mongoMessage: mongoMessage
    });
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log('listening on port ' + port);