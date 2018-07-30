(function () {
    'use strict';
    angular
        .module('centric')
        .factory('RequestFactory', function ($http, $rootScope, AuthFactory, cfpLoadingBar) {
            var _super = {
                post: function (method, form) {
                    form._ApplicationId = AuthFactory.appId;
                    cfpLoadingBar.start();
                    return new Promise(function (resolve, reject) {
                        Parse.Cloud.run(method, form).then(function (response) {
                            resolve(response);
                        }, function (error) {
                            reject(error);
                        }).always(function () {
                            cfpLoadingBar.complete();
                        });
                    });
                },
                get: function (method, form) {
                    form._ApplicationId = appId;
                    return new Promise(function (resolve, reject) {
                        $http.get(AuthFactory.url + "functions/" + method, {params: form}).then(function (response) {
                            resolve(response);
                        }, function (error) {
                            reject(error);
                        });
                    });
                }
            };
            return _super;
        })
})();
