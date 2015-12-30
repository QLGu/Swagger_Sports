var swagger_sports = angular.module('swagger_sports', ['ngRoute']);

var url = 'https://api.fantasydata.net/nfl/v2/JSON/Schedules/2015';

swagger_sports.config(function($routeProvider ){
	$routeProvider
		.when('/', {templateUrl: 'partials/landing1.html'})
		.when('/home', {templateUrl: 'partials/home.html'})
		.when('/chat', {templateUrl: 'partials/chat.html'})
		.when('/profile', {templateUrl: 'partials/profile.html'});
});

swagger_sports.factory('userFactory', function($http){
	var factory = {};
	return factory; 
});

swagger_sports.factory('sportFactory', function($http){
	var factory = {};

	factory.get_nfl_schedule = function(callback){
		$http.get('/get_scores').success(function(data){
			callback(data);
			console.log(data);
		});
	};
	return factory; 
});



swagger_sports.controller('usersController', function($scope, userFactory, sportFactory){

	$scope.nfl_schedule_data = function(callback){
		sportFactory.get_nfl_schedule(function(data){	
			$scope.nfl_schedule_data = data;
			console.log($scope); 
		});
	};


});



