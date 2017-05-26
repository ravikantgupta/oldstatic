var myApp = angular.module('myApp', []);

angular.module("routeModule",['ngRoute'])
.config(function($routeProvider)
{
	$routeProvider
	.when('/',{
		templateUrl:'template/homecontent.html'
	})
	.when('/pakage',{
		templateUrl:'template/homecontent.html'
	});
});