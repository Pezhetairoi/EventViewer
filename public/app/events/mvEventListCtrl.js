app.controller('mvEventListCtrl', function($scope, mvCachedEvents) {
    $scope.events = mvCachedEvents.query();

    $scope.sortOptions = [
        {
            value: "title",
            text: "Sort By Title"
        },
        {
            value: "date",
            text: "Sort By Event Date "
        }
    ];
});
