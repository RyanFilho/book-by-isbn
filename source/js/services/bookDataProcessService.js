app.factory('bookDataProcessService', function () {
	var bookDataProcessFactory = {};

	var _processData = function (googleBook) {
		book = {
			imageLink: 'http://draftsdanica.com.br/wp-content/themes/seashell-child/imagem/padrao/capa_livro.png',
			title: 'not find',
			authors: 'not find',
			publishedDate: 'not find',
			pageCount: 'not find',
			industryIdentifiers: ['not find', 'not find'],
			description: 'not find',
			categories: 'not find'
		};
		if (googleBook) {
			googleBook.imageLinks ? book.imageLink = googleBook.imageLinks.thumbnail : book.imageLink = 'http://draftsdanica.com.br/wp-content/themes/seashell-child/imagem/padrao/capa_livro.png';
			googleBook.title ? book.title = googleBook.title : book.title = 'not find';
			googleBook.authors ? book.authors = googleBook.authors.join(',') : book.authors = 'not find';
			googleBook.publishedDate ? book.publishedDate = googleBook.publishedDate : book.publishedDate = 'not find';
			googleBook.pageCount ? book.pageCount = googleBook.pageCount : book.pageCount = 'not find';
			googleBook.industryIdentifiers && googleBook.industryIdentifiers[0].identifier && googleBook.industryIdentifiers[1].identifier? book.industryIdentifiers = [googleBook.industryIdentifiers[0].identifier, googleBook.industryIdentifiers[1].identifier] : book.industryIdentifiers = 'not find';
			googleBook.description ? book.description = googleBook.description : book.description = 'not find';
			googleBook.categories ? book.categories = googleBook.categories.join(',') : book.categories = 'not find';
			
		};
		return book;
	};

	bookDataProcessFactory.processData = _processData;
	return bookDataProcessFactory;
});