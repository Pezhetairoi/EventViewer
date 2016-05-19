angular.module('app').controller('mvUpdateEventCtrl', function($scope, $routeParams, $location, mvEvent, mvEventHandler, mvNotifier) {
    /*
    $scope.event = mvEvent.get({
        _id:$routeParams.id
    }).$promise
        .then(function(event) {
            $scope.event = event;
            console.log($scope.event);
            $scope.title =$scope.event.title;
            $scope.desc = $scope.event.desc;
            $scope.date = $scope.event.date;
            $scope.duration = $scope.event.duration;
            $scope.address = $scope.event.address;
            $scope.city = $scope.event.city;
            $scope.state = $scope.event.state;
        });



    $scope.updateEvent = function() {

        $scope.event.$update(function() {
        }, function(error) {
            $scope.error = error.data.message;
        });
        console.log('dafds');
    }
    */
    $scope.event = mvEvent.get({_id:$routeParams.id})
        .$promise
            .then(function(event) {
                $scope.event = event;
                console.log($scope.event);
                $scope.title =$scope.event.title;
                $scope.desc = $scope.event.desc;
                $scope.date = $scope.event.date;
                $scope.duration = $scope.event.duration;
                $scope.address = $scope.event.address;
                $scope.city = $scope.event.city;
                $scope.state = $scope.event.state;
            });

    $scope.updateEvent = function() {
        $scope.event.$update(function() {
        }, function(error) {
            $scope.error = error.data.message;
        });
        console.log('dafds');

    }



});
