//var submitbtn = document.getElementById('submit');
window.addEventListener('load', function() {
	init();
	getAllThebooks();
});

function init() {
	console.log("script.js loaded");
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
	let div = document.getElementById('bookList');
	div.textContent = '';
	let h1 = document.createElement('h1');
	h1.textContent = book.title;
	div.appendChild(h1);
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
