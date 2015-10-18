app.controller('bookController', ['$scope', '$routeParams', function ($scope, $routeParams) {
	$scope.isbn = $routeParams.isbn;
}]);