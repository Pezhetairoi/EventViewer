app.controller('mvUserListCtrl', function($scope, mvUser) {
    $scope.users = mvUser.query();
});
