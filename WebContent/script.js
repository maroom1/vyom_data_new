	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope,$http) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
		$scope.display=function(){
	        //var weatherurl="http://api.openweathermap.org/data/2.5/weather?q="+vm.city+"&APPID=e7fdb896e985f4654673ec880d77aee2";
	    $http.get("http://api.openweathermap.org/data/2.5/weather?q="+$scope.city+"&units=metric&APPID=e7fdb896e985f4654673ec880d77aee2").then(function(response){
	        $scope.temperature=response.data;
	    });
	    
	    }; 
	});

	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});