app.controller('mvNewEventCtrl', function($scope, $location, mvEventHandler, mvIdentity, mvNotifier) {
    $scope.createEvent = function() {
        var newEventData = {
            title: $scope.title,
            desc: $scope.desc,
            date: $scope.date,
            duration: $scope.duration,
            address: $scope.address,
            city: $scope.city,
            state: $scope.state
        };

        mvEventHandler.createNewEvent(newEventData).then(function() {
            mvNotifier.notify('Event created!');
            $location.path('/');
        }, function(reason) {
            mvNotifier.error(reason);
        });

    }
});
