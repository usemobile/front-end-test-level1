(function () {
	'use strict';
	angular.module('centric').controller('DashboardCtrl', ['$scope', '$uibModal', 'AuthFactory', 'RequestFactory', 'Colors', 'ChartData', 'uiGmapGoogleMapApi', function ($scope, $uibModal, auth, request, Colors, ChartData, gmaps) {

	}]).run(['Router', function (Router) {
		Router.state('app.dashboard', {
			url: '/dashboard',
			title: 'Dashboard',
			templateUrl: 'dashboard.html',
			require: ['angular-flot', 'easypiechart', 'sparkline', 'vector-map', 'vector-map-maps', 'lodash', 'uiGmapgoogle-maps']
		});
	}]);
})();
