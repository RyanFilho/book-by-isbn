app.factory('googleBookSearchService', ['$resource', function ($resource) {
	googleBookSearchFactory = {};
	//key=AIzaSyC3FKSRpEjqIwaTi5lXS8_4hP968O_-1PU 
	var url = 'https://www.googleapis.com/books/v1/volumes?q=:parameters';
	var resource = $resource(url);

	var _searchISBN = function (isbn, callback) {
		resource.get({parameters: 'isbn:' + isbn + '&maxResults=1'}, function (response) {
			callback(response);
		});
	};

	googleBookSearchFactory.searchISBN = _searchISBN;

	return googleBookSearchFactory;
}]);