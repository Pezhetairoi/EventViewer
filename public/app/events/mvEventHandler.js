app.factory('mvEventHandler', function($http, $q, $routeParams,mvEvent) {
    return {
        createNewEvent: function(newEventData) {
            var newEvent = new mvEvent(newEventData);
            var deferred = $q.defer();

            newEvent.$save().then(function() {
                deferred.resolve();
            }, function(response) {
                deferred.reject(response.data.reason);
            });
            return deferred.promise;
        }
        /*
        updateCurrentEvent: function(newEventData) {
            var deferred = $q.defer();
            var currentEvent = mvEvent.get({_id: $routeParams.id});
            angular.extend(currentEvent, newEventData);

            currentEvent.$update().then(function () {
                console.log(currentEvent);
                deferred.resolve();
            }, function (response) {
                deferred.reject(response.data.reason);
            });
            return deferred.promise;
        }
        */
    }
});