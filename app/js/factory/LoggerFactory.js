/**
 * Created by Patrick on 08/05/2017.
 */
(function () {
    'use strict';
    angular.module('centric')
        .factory("logger", function () {
            var a;
            return toastr.options = {
                closeButton: !0,
                positionClass: "toast-bottom-right",
                timeOut: "3000"
            }, a = function (a, b) {
                return toastr[b](a)
            }, {
                log: function (b) {
                    a(b, "info")
                },
                logWarning: function (b) {
                    a(b, "warning")
                },
                logSuccess: function (b) {
                    a(b, "success")
                },
                logError: function (b) {
                    a(b, "error")
                }
            }
        });
})();
