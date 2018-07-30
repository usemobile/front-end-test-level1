(function () {
	'use strict';
	angular.module('centric').controller('ClientsCtrl', ['$scope', 'Router', 'ngTableParams', '$filter', function ($scope, Router, ngTableParams, $filter) {

		$scope.filteredClients = $scope.clients = [
			{
				id: "1",
				name: "João",
				lastname: "Batista",
				cpf: "111.111.111-00"
			},{
				id: "2",
				name: "Gabriel",
				lastname: "Bueno",
				cpf: "222.222.222-00"
			},{
				id: "3",
				name: "Lara",
				lastname: "Campos",
				cpf: "333.333.333-00"
			},{
				id: "4",
				name: "Joana",
				lastname: "Prado",
				cpf: "456.456.456-00"
			},{
				id: "5",
				name: "Cléber",
				lastname: "Machado",
				cpf: "777.777.777-00"
			}
		];

		$scope.tableParams = new ngTableParams({
				page: 1, // show first page
				count: 10, // count per page
				sorting: {
				name: 'asc' // initial sorting
			},
			filter: {
				name: ''
			}
		}, {
			total: $scope.filteredClients.length, // length of data
			getData: function($defer, params) {
				var data = $scope.filteredClients;
				var orderedData = params.sorting()? $filter('orderBy')(data, params.orderBy()): data;
				orderedData = params.filter()? $filter('filter')(orderedData, params.filter()): orderedData;
				$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
			}
		});

		$scope.filter = function(key) {
			if (!key) {
				$scope.filteredClients = $scope.clients;
			} else {
				$scope.filteredClients = [];
				for (var i = 0; i < $scope.clients.length; i++) {
					if ($scope.clients[i].name.toLowerCase().indexOf(key.toLowerCase()) != -1) {
						$scope.filteredClients.push($scope.clients[i]);
					}
				}
			}
			$scope.tableParams.reload();
		};

		$scope.new = function () {
			var modalInstance = $uibModal.open({
				templateUrl: 'addClient.html',
				controller: 'AddClientCtrl',
				size: 'md',
				resolve: {
					rate: void 0
				}
			});
			modalInstance.result.then(function (newClient) {
				console.log(newClient);
				// adicionar o novo cliente ao scope
				// ...
			}, function() {
				console.log('Modal dismissed with Cancel status');
			});
		};

	}]).controller('AddClientCtrl', ['$scope', '$uibModalInstance', 'rate', "RequestFactory", function ($scope, $uibModalInstance, rate, request) {

		$scope.close = function () {
			$uibModalInstance.dismiss();
		};

		$scope.submitForm = function () {
			if ($scope.form.$valid) {
				$scope.save();
				// $uibModalInstance.close({id: 99, name: $scope.name, count: 0});
			} else {
				return false;
			}
		};

		$scope.save = function () {
			$scope.loading = true;
			$uibModalInstance.close({
				id: "x",
				name: $scope.name,
				lastname: $scope.lastname,
				cpf: $scope.form.cpf.$viewValue
			});
		};

	}]).run(['Router', function (Router) {
		Router.state('app.clients', {
			url: '/clients',
			title: 'Clientes',
			templateUrl: 'clients.html',
			controller: 'ClientsCtrl',
			require: ['akoenig.deckgrid', 'ngTable']
		});
	}]);
})();
