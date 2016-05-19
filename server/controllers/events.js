var Event = require('mongoose').model('Event');

exports.getEvents = function(req, res) {
    Event.find({}).exec(function(error, collection) {
        res.send(collection);
    });
};

exports.createEvent = function(req, res) {
    var eventData = req.body;
    Event.create(eventData, function(err, event) {
        if(err) {
            res.status(400);
            return res.send({reason: err.toString()});
        }
        res.send(event);
    });
};

exports.getEventById = function(req, res) {
    Event.findOne({_id:req.params.id}).exec(function(error, event) {
        res.send(event);
        //if(!event) return next(new Error('Failed to load event '));

        //req.event = event;
        //console.log(req.event);
        //next();
    });
};

exports.updateCurrentEvent = function(req, res) {
    /*
    var event = req.event;
    event.title = req.body.title;
    event.desc = req.body.desc;
    event.date = req.body.date;
    event.duration = req.body.duration;
    event.address = req.body.address;
    event.city = req.body.city;
    event.state = req.body.state;
    */
     Event.findOne(req.params.id, req.body, function(err, event) {
         var event = req.body;
         console.log(event);
         if(!event) {
            res.statusCode = 404;
            res.send({ error: 'Not found'});
         }
        event.title = req.body.title;
        event.desc = req.body.desc;
        event.date = req.body.date;
        event.duration = req.body.duration;
        event.address = req.body.address;
        event.city = req.body.city;
        event.state = req.body.state;

        event.save(function (err) {
            if (!err) {
                log.info("event updated");
                res.send({ status: 'OK', event:event });
            } else {
                if(err.name == 'ValidationError') {
                    res.statusCode = 400;
                    res.send({ error: 'Validation error' });
                } else {
                    res.statusCode = 500;
                    res.send({ error: 'Server error' });
                }
                log.error('Internal error(%d): %s',res.statusCode,err.message);
            }
        });

    });

        /*
        event.save(function(error) {
            if(error) {
                res.status(400);
                return res.send({reason:error.toString()});
            }else{
                res.json(event);
            }
        });
        */

};

