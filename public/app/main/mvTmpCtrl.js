angular.module('app').controller('mvTmpCtrl', function($scope) {
    $scope.currentTemplate = '/partials/events/eventTemplates/tmp1';
    $scope.isActive = true;
    $scope.toggleTemplate = function(tmp) {
        $scope.currentTemplate = tmp;
        $scope.isActive = !$scope.isActive;
    }
});
