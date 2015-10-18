app.factory('bookSearchService', ['googleBookSearchService', function (googleBookSearchService) {
	bookSearchFactory = {};
	var googleBookSearch = googleBookSearchService.searchISBN;

	var _searchBook = function (isbn, callback) {
		googleBookSearch(isbn, function (response) {
			if (response.totalItems) {
				callback(response.items[0].volumeInfo);
			}else {
				callback(null);
			};			
		});	
	};

	bookSearchFactory.searchBook = _searchBook;
	return bookSearchFactory;
}]);