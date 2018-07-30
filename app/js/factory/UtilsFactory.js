(function () {
	'use strict';
	angular.module('centric').factory('UtilsFactory', function (AuthFactory,cfpLoadingBar) {
		var _super = {
			validateEmail : function(email) {
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return re.test(email);
			}
		};
		return _super;
	});
})();