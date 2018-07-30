(function () {
    'use strict';
    angular.module('centric').controller('GeneralConfirmCtrl', ['$scope', '$uibModalInstance', 'title', 'message', 'confirmText', 'cancelText', function ($scope, $uibModalInstance, title, message, confirmText, cancelText) {

        $scope.title = title;
        $scope.message = message;
        $scope.cancelText = cancelText;
        $scope.confirmText = confirmText;

        $scope.close = function () {
            $uibModalInstance.dismiss();
        };

        $scope.confirm = function () {
            $uibModalInstance.close();
        };
    }]);
})();
