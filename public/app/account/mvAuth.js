app.factory('mvAuth', function($http, $q, mvIdentity, mvUser) {
    return {
        authenticateUser: function(username, password) {
            var deferred = $q.defer();
            $http.post('/login', {username: username, password: password})
                .then(function(response) {
                    if(response.data.success) {
                        var user = new mvUser();
                        angular.extend(user, response.data.user);
                        mvIdentity.currentUser = user;
                        deferred.resolve(true);
                    }else {
                        deferred.resolve(false);
                    }
                });
            return deferred.promise;
        },

        createUser: function(newUserData) {
            var newUser = new mvUser(newUserData);
            var deferred = $q.defer();

            newUser.$save().then(function() {
                mvIdentity.currentUser = newUser;
                deferred.resolve();
            }, function(response) {
                deferred.reject(response.data.reason);
            });psychiatrist

            return deferred.promise;
        },

        updateCurrentUser: function(newUserData) {
            var deferred = $q.defer();
            var currentUserClone = angular.copy(mvIdentity.currentUser);
            angular.extend(currentUserClone, newUserData);
            currentUserClone.$update().then(function() {
                mvIdentity.currentUser = currentUserClone;
                deferred.resolve();
            }, function(response) {
                deferred.reject(response.data.reason);
            });

            return deferred.promise;
        },

        logoutUser: function() {
            var deferred = $q.defer();
            $http.post('/logout', {logout: true})
                .then(function() {
                    mvIdentity.currentUser = undefined;
                    deferred.resolve();
                });
            return deferred.promise;
        },

        authorizeCurrentUserForRoute: function(role) {
            if(mvIdentity.isAuthorized(role)) {
                return true;
            }else{
                return $q.reject('not authorized');
            }
        },

        authorizeLoggedInUserForRoute: function() {
            if(mvIdentity.isAuthenticated()) {
                return true;
            }else{
                return $q.reject('not authorized');
            }
        }
    }
});

