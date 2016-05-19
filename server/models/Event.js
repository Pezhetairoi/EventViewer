var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
    title: {type:String, required:'{PATH} is required!'},
    desc: {type:String, required:'{PATH} is required!'},
    date: {type:Date, required:'{PATH} is required!'},
    duration: {type:String, required: '{PATH} is required!'},
    address: {type:String, required:'{PATH} is required!'},
    city: {type:String, required:'{PATH} is required!'},
    state: {type:String, required:'{PATH} is required!'}
});
var Event = mongoose.model('Event', eventSchema);

function createDefaultEvents() {
    Event.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            Event.create({
                title:'Wk 5 Prayer Meeting',
                desc:"Joyce is holding this week's Prayer Meeting.",
                date: new Date('4/08/2016'),
                duration: '18:00 - 20:30',
                address: "5 Southern Cross Ave",
                city: "Douglas",
                state: "Qld"
            });
            Event.create({
                title:'Sunday Service Apr 10',
                desc:"Scheduled Sunday Service this week.",
                date: new Date('4/10/2016'),
                duration: '8:00 - 11:00',
                address: "37 Canterbury Rd",
                city: "Kirwan",
                state: "Qld"
            });
            Event.create({
                title:'Pod Luck Meal',
                desc:"Pod luck meal at Strand after Sunday Service. Everyone please contribute a dish or two to be shared.",
                date: new Date('4/10/2016'),
                duration: '16:00 - 18:00',
                address: "Strand Water Park",
                city: "North Ward",
                state: "Qld"
            });
            Event.create({
                title:'Outing - Mission Beach',
                desc:"A day-trip to Mission Beach.",
                date: new Date('4/10/2016'),
                duration: '18:00 - 20:30',
                address: "Mission Beach",
                city: "Mission Beach",
                state: "Qld"
            });
        }
    })
}
exports.createDefaultCourses = createDefaultEvents;