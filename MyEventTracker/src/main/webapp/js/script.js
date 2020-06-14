//var submitbtn = document.getElementById('submit');
window.addEventListener('load', function() {
	init();
	//getAllThebooks();
});

function init() {
	console.log("script.js loaded");
	let addButton = document.getElementById('addBook');
	addButton.addEventListener('click', createBookForm);
	document.bookSearchForm.book.addEventListener('click', function(e) {
		e.preventDefault();
		var bookId = document.bookSearchForm.bookId.value;
		if (!isNaN(bookId) && bookId > 0) {
			getBookById(bookId);
		}
	});	
}
function clearDiv() {
	console.log("I AM HERE");
	let div = document.getElementById('bookList');
	console.log(div);
	while(div.firstElementChild) {
		div.removeChild(div.firstElementChild);
	} 
}
function showErrors(message) {
	clearDiv();
	let div = document.getElementById('bookList');
	let h3 = document.createElement('h3');
	h3.textContent = message;
	div.appendChild(h3);
}

function displayBook(book) {
	console.log("*******" + book);
	console.log(book.id);
	let deleteButton = document.createElement('button');
	deleteButton.type = 'submit';
	deleteButton.id = 'deletebtn';
	deleteButton.textContent = 'Delete Book';
	deleteButton.addEventListener('click', function() {
		deleteBook(book.id);
	});

	let div = document.getElementById('bookList');
	div.textContent = '';
	let h1 = document.createElement('h1');
	h1.textContent = book.title;
	div.appendChild(h1);
	div.appendChild(deleteButton);
}

function getBookById(id) {
	console.log(id);
	let xhr = new XMLHttpRequest();
	let uri = `api/books/${id}`;

	xhr.open('GET', uri);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				var book = JSON.parse(xhr.responseText);
				console.log(book);
				displayBook(book);
			} else {
				showErrors("Book not found!");
			}
		}
	}
	xhr.send(null);
}

function getAllThebooks() {
	let xhr = new XMLHttpRequest();
	let uri = 'api/books';
	xhr.open('GET', uri);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				var books = JSON.parse(xhr.responseText);
				console.log(books);
				displayBooks(books);
			} else {
				showErrors("ERROR SHOWING BOOKS!");
			}
		}
	}
	xhr.send(null);
}

function displayBooks(books) {
	console.log("I RAN LIKE I WAS SUPPOSED TO");
	console.log(books);
	let div = document.getElementById('bookList');
	let ul = document.createElement('ul');
	for (var i = 0; i < books.length; i++) {
		let li = document.createElement('li');
		let author = document.createElement('blockquote');
		let title = document.createElement('h3');
		author.textContent = books[i].author;
		title.textContent = books[i].title;
		li.appendChild(title);
		li.appendChild(author);
		ul.appendChild(li);
	}
	div.appendChild(ul);
}

function createBookForm() {
	let addButton = document.getElementById('addBook');
	let div = document.getElementById('createBook');
	let form = document.createElement('form');
	form.name = 'createBookForm';

	let title = document.createElement('input');
	title.type = 'text';
	title.name = 'title';
	title.placeholder = 'Title';
	form.appendChild(title);
	form.appendChild(document.createElement('br'));

	let author = document.createElement('input');
	author.type = 'text';
	author.name = 'author';
	author.placeholder = 'Author';
	form.appendChild(author);
	form.appendChild(document.createElement('br'));

	var genres = ['Sci-fi', 'Fantasy', 'Thriller', 'Biography', 'Religious', 'Language', 'Technology/Programming', 'RPG/Gaming', ];
	let genre = document.createElement('select');
	genre.name = 'genre';
	for(let i = 0; i < genres.length; i++) {
		var option = document.createElement('option');
		option.value = genres[i];
		option.text = genres[i];
		genre.appendChild(option);
	}

	var year = document.createElement('input');
	year.type = 'number';
	year.name = 'year';
	year.placeholder = 'publish year';


	var isbn = document.createElement('input');
	isbn.type='text';
	isbn.name = 'isbn';
	isbn.placeholder = 'isbn';

	var publisher = document.createElement('input');
	publisher.type = 'text';
	publisher.name = 'publisher';
	publisher.placeholder = 'publisher';

	var submitButton = document.createElement('input');
	submitButton.type = 'submit';
	submitButton.name = 'submit';
	submitButton.value = 'Submit';

	
	form.appendChild(document.createElement('br'));
	form.appendChild(title);
	form.appendChild(document.createElement('br'));
	form.appendChild(author);
	form.appendChild(document.createElement('br'));
	form.appendChild(genre);
	form.appendChild(document.createElement('br'));
	form.appendChild(year);
	form.appendChild(document.createElement('br'));
	form.appendChild(isbn);
	form.appendChild(document.createElement('br'));
	form.appendChild(publisher);
	form.appendChild(document.createElement('br'));
	form.appendChild(submitButton);
	div.appendChild(form);
	submitButton.addEventListener('click', addBook);
	addButton.removeEventListener('click', createBookForm);
}

function addBook(e) {
	e.preventDefault();
	let form = document.createBookForm;
	console.log(form);
	let book = {};
	book.title = form.title.value;
	console.log(book.title);
	book.author = form.author.value;
	book.genre = form.genre.value;
	book.year = form.year.value;
	book.isbn = form.isbn.value;
	book.publisher = form.publisher.value;
	//console.log(book);
	postBook(book);
}

function postBook(book) {
	let form = document.createBookForm;
	let bookJSON = JSON.stringify(book);
	let uri = `api/books`;
	let xhr = new XMLHttpRequest();
	xhr.open('POST', uri);
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			if(xhr.status === 200 || xhr.status === 201) {
				let createdBook = JSON.parse(xhr.responseText);
				displayBook(createdBook);
			} else {
				showErrors('Unknown issue creating book');
			}
		}
	}

	xhr.send(bookJSON);
	form.reset();
}

function deleteBook(id) {
	let uri = `api/books/${id}`;
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', uri);
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			if(xhr.status === 200 || xhr.status === 204) {
				clearDiv();
				alert('Book Successfully deleted');
			} else {
				showErrors('ERROR deleting film');
			}
		}
	}
	xhr.send(null);
}
