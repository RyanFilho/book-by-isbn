app.factory('bookSearchService', ['googleBookSearchService', function (googleBookSearchService) {
	bookSearchFactory = {};
	var googleBookSearch = googleBookSearchService.searchISBN;

	var _searchBook = function (isbn, callback) {
		googleBookSearch(isbn, function (response) {
			callback(response.items[0].volumeInfo);
		});	
	};

	bookSearchFactory.searchBook = _searchBook;
	return bookSearchFactory;
}]);