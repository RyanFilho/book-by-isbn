app.controller('bookController', ['$scope', '$routeParams', 'bookSearchService', 'bookDataProcessService', function ($scope, $routeParams, bookSearchService, bookDataProcessService) {
	var isbn = $routeParams.isbn;
	bookSearch = bookSearchService.searchBook;
	bookDataProcess = bookDataProcessService.processData;
	bookSearch(isbn, function (response) {
		$scope.book = bookDataProcess(response);
	});

}]);