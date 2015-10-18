app.controller('bookController', ['$scope', '$routeParams', 'bookSearchService', function ($scope, $routeParams, bookSearchService) {
	var isbn = $routeParams.isbn;
	bookSearch = bookSearchService.searchBook;
	bookSearch(isbn, function (response) {
		console.log(response);
	});
}]);