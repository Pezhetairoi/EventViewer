app.factory('mvCachedEvents', function(mvEvent) {
    var eventList;
    return {
        query: function() {
            if(!eventList){
                eventList = mvEvent.query();
                //console.log(eventList);
            }
            return eventList;
        }
    }
});
