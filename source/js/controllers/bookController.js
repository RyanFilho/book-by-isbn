app.controller('bookController', ['$scope', '$routeParams', 'bookSearchService', function ($scope, $routeParams, bookSearchService) {
	var isbn = $routeParams.isbn;
	bookSearch = bookSearchService.searchBook;
	bookSearch(isbn, function (response) {
		$scope.book = {};
		$scope.book.title = response.title;
		$scope.book.authors = response.authors.join(',');
		$scope.book.publishedDate = response.publishedDate;
		$scope.book.pageCount = response.pageCount;
		$scope.book.description = response.description;
		$scope.book.industryIdentifiers = [response.industryIdentifiers[0].identifier, response.industryIdentifiers[1].identifier];

	});
}]);