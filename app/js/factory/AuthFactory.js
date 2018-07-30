(function () {
    'use strict';
    angular.module('centric')
        .factory("AuthFactory", function ($rootScope) {
            var _super = {
                appId: "?",
                url: "?",
                init: function (appId, url) {
                    Parse.initialize(appId);
                    Parse.serverURL = url;
                }, put: function (login, isSignup, $window) {
                    Parse.User.become(login.getSessionToken()).then(function (ok) {
                        $rootScope.isLoading = false;
                        $rootScope.user = Parse.User.current().toJSON();
                        $rootScope.hasUser = true;
                        location.href = "#/app/dashboard";
                    });
                }, getUser: function () {
                    return $rootScope.user;
                }, logout: function () {
                    Parse.User.logOut();
                    $rootScope.hasUser = false;
                    $rootScope.user=  null;
                }
            };
            _super.init(_super.appId, _super.url);
            $rootScope.user = Parse.User.current()? Parse.User.current().toJSON() : null;
            return _super;
        });
})();
