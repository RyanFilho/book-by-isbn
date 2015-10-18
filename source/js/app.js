var app = angular
	.module('bookbyisbn', [
		'ngRoute'
		]);

// Definindo Rotas
app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: "html/views/home.html"
		})
		.when("/book/:isbn", {
			controller: "bookController",
			templateUrl: "html/views/book.html"
		})
		.otherwise({redirectTo: '/'});
});