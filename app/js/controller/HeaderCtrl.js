    (function () {
    'use strict';
    angular.module('centric').controller('HeaderCtrl', ['$scope', '$rootScope', 'AuthFactory', function ($scope, $rootScope, auth) {

        // $rootScope.userPicture = Parse.User.current().attributes.photo? Parse.User.current().attributes.photo: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png';
        // $rootScope.userLogo = Parse.User.current().attributes.logo;

        $scope.logout = function () {
            auth.logout();
            location.href = "#/user/login";
        };
    }]);
})();
