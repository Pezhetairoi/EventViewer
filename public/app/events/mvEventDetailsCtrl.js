app.controller('mvEventDetailsCtrl', function($scope, mvEvent, $routeParams) {
    /*mvCachedEvents.query().$promise.then(function(collection) {
        collection.forEach(function(event) {
           if(event._id === $routeParams.id) {
               $scope.event = event;
           }
        });
    })
    */
    $scope.event = mvEvent.get({
        _id:$routeParams.id
    })
        .$promise
            .then(function(event) {
                $scope.event = event;
            });

});
