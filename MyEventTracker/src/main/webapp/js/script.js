/**
 * 
 */

window.addEventListener('load', function() {
	init();
	getAllThebooks();
});


function init() {
	console.log("script.js loaded");
}

function showErrors(message) {
	let div = document.getElementById('bookList');
	let h3 = document.createElement('h3');
	h3.textContent = message;
	div.appendChild(h3);
}

function getAllThebooks() {
	let xhr = new XMLHttpRequest();
	let uri = 'api/books';
	xhr.open('GET', uri);
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			if(xhr.status == 200) {
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
	let div = document.getElementById('bookList');
	let ul = document.createElement('ul');
	for(var i = 0; i < books.length; i++) {
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