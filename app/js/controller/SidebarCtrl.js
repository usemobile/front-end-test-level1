(function () {
	'use strict';
	angular.module('centric').controller('SidebarCtrl', ['$scope', '$uibModal', 'AuthFactory', 'RequestFactory', function ($scope, $uibModal, auth, request) {

		$scope.options = [
			{
				name: 'Dashboard',
				href: '#/app/dashboard'
			},{
				name: 'Clientes',
				href: '#/app/clients'
			}
		];
		
	}]);
})();
