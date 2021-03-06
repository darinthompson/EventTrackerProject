window.addEventListener("load", function () {
  init();
  //getAllThebooks();
});

function init() {
  console.log("script.js loaded");
  let addButton = document.getElementById("addBook");
  let bookListButton = document.getElementById('getAllBooks');
  bookListButton.addEventListener('click', getAllThebooks);
  addButton.addEventListener("click", createBookForm);
  document.bookSearchForm.book.addEventListener("click", function (e) {
    e.preventDefault();
    var bookId = document.bookSearchForm.bookId.value;
    if (!isNaN(bookId) && bookId > 0) {
      getBookById(bookId);
    }
  });
}
function clearDiv() {
  let div = document.getElementById('bookList');
  console.log(div);
  while (div.firstElementChild) {
    div.removeChild(div.firstElementChild);
  }
}
function showErrors(message) {
  clearDiv();
  let div = document.getElementById("bookList");
  let h3 = document.createElement("h3");
  h3.textContent = message;
  div.appendChild(h3);
}

function displayBook(book) {
  document.bookSearchForm.reset();
  console.log("*******" + book);
  console.log(book.id);

  let deleteButton = document.createElement("button");
  deleteButton.type = "submit";
  deleteButton.id = "deletebtn";
  deleteButton.textContent = "Delete Book";
  deleteButton.addEventListener("click", function () {
    deleteBook(book.id);
  });

  let updateButton = document.createElement("button");
  updateButton.type = "submit";
  updateButton.id = "updatebtn";
  updateButton.textContent = "Update Book";
  updateButton.addEventListener("click", function () {
    console.log("-----" + book.title + "-----");
    createEditForm(book);
  });

  let div = document.getElementById("bookList");
  div.textContent = "";

  let author = document.createElement("h5");
  let title = document.createElement("h2");
  let genre = document.createElement('h5');
  let year = document.createElement('h5');
  let publisher = document.createElement('h5');
  let isbn = document.createElement('h5');
  
  title.textContent = book.title;
  year.textContent = 'Year: ' + book.year;
  genre.textContent = 'Genre: ' + book.genre;
  author.textContent = 'Author: ' + book.author;
  title.textContent = 'Title: ' + book.title;
  isbn.textContent = 'ISBN: ' + book.isbn;
  publisher.textContent = "Publisher: " + book.publisher;
  div.appendChild(title);
  div.appendChild(author);
  div.appendChild(genre);
  div.appendChild(year);
  div.appendChild(isbn);
  div.appendChild(publisher);
  div.appendChild(deleteButton);
  div.appendChild(updateButton);
}

function getBookById(id) {
  console.log(id);
  let xhr = new XMLHttpRequest();
  let uri = `api/books/${id}`;

  xhr.open("GET", uri);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var book = JSON.parse(xhr.responseText);
        console.log(book);
        displayBook(book);
      } else {
        showErrors("Book not found!");
      }
    }
  };
  xhr.send(null);
}

function getAllThebooks() {
  let xhr = new XMLHttpRequest();
  let uri = "api/books";
  xhr.open("GET", uri);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var books = JSON.parse(xhr.responseText);
        console.log(books);
        displayBooks(books);
      } else {
        showErrors("ERROR SHOWING BOOKS!");
      }
    }
  };
  xhr.send(null);
}

function displayBooks(books) {
  let counter = 0;
  let bookCount = document.createElement('blockquote');
  console.log(books);
  let div = document.getElementById("bookList");
  div.textContent = '';
  let ul = document.createElement("ul");
  for (var i = 0; i < books.length; i++) {
	counter++;
    let li = document.createElement("li");
    let author = document.createElement("h5");
    let title = document.createElement("h2");
	let genre = document.createElement('h5');
	let year = document.createElement('h5');
	let publisher = document.createElement('h5');
	let isbn = document.createElement('h5');

	year.textContent = 'Year: ' + books[i].year;
	genre.textContent = 'Genre: ' + books[i].genre;
	author.textContent = 'Author: ' + books[i].author;
	title.textContent = 'Title: ' + books[i].title;
	isbn.textContent = 'ISBN: ' + books[i].isbn;
	publisher.textContent = "Publisher: " + books[i].publisher;

	li.appendChild(title);
	li.appendChild(document.createElement('hr'));
	li.appendChild(author);
	li.appendChild(genre);
	li.appendChild(year);
	li.appendChild(isbn);
	li.appendChild(publisher);
	ul.appendChild(li);
  }
  bookCount.textContent = counter + " books found";
  div.appendChild(bookCount);
  div.appendChild(ul);
}

function createBookForm() {
  let addButton = document.getElementById("addBook");
  let div = document.getElementById("createBook");
  let form = document.createElement("form");
  form.name = "createBookForm";

  let title = document.createElement("input");
  title.type = "text";
  title.name = "title";
  title.placeholder = "Title";
  form.appendChild(title);
  form.appendChild(document.createElement("br"));

  let author = document.createElement("input");
  author.type = "text";
  author.name = "author";
  author.placeholder = "Author";
  form.appendChild(author);
  form.appendChild(document.createElement("br"));

  var genres = [
    "Sci-fi",
    "Fantasy",
    "Thriller",
    "Biography",
    "Religious",
    "Language",
    "Technology/Programming",
    "RPG/Gaming",
  ];
  let genre = document.createElement("select");
  genre.name = "genre";
  for (let i = 0; i < genres.length; i++) {
    var option = document.createElement("option");
    option.value = genres[i];
    option.text = genres[i];
    genre.appendChild(option);
  }

  var year = document.createElement("input");
  year.type = "number";
  year.name = "year";
  year.placeholder = "publish year";

  var isbn = document.createElement("input");
  isbn.type = "text";
  isbn.name = "isbn";
  isbn.placeholder = "isbn";

  var publisher = document.createElement("input");
  publisher.type = "text";
  publisher.name = "publisher";
  publisher.placeholder = "publisher";

  var submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.name = "submit";
  submitButton.value = "Submit";

  form.appendChild(document.createElement("br"));
  form.appendChild(title);
  form.appendChild(document.createElement("br"));
  form.appendChild(author);
  form.appendChild(document.createElement("br"));
  form.appendChild(genre);
  form.appendChild(document.createElement("br"));
  form.appendChild(year);
  form.appendChild(document.createElement("br"));
  form.appendChild(isbn);
  form.appendChild(document.createElement("br"));
  form.appendChild(publisher);
  form.appendChild(document.createElement("br"));
  form.appendChild(submitButton);
  div.appendChild(form);
  submitButton.addEventListener("click", addBook);
  addButton.removeEventListener("click", createBookForm);
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
  postBook(book);
}

function postBook(book) {
  let form = document.createBookForm;
  let bookJSON = JSON.stringify(book);
  let uri = `api/books`;
  let xhr = new XMLHttpRequest();
  xhr.open("POST", uri);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status === 201) {
        let createdBook = JSON.parse(xhr.responseText);
        displayBook(createdBook);
      } else {
        showErrors("Unknown issue creating book");
      }
    }
  };

  xhr.send(bookJSON);
  form.reset();
}

function deleteBook(id) {
  let uri = `api/books/${id}`;
  let xhr = new XMLHttpRequest();
  xhr.open("DELETE", uri);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status === 204) {
        clearDiv();
        alert("Book Successfully deleted");
      } else {
        showErrors("ERROR deleting film");
      }
    }
  };
  xhr.send(null);
}
// ********************** UPDATE FUNCTIONS ******************************//
function createEditForm(book) {
	let div = document.getElementById('updateBook');
	let form = document.createElement('form');
	form.name = 'update';

	let id = document.createElement('input');
	id.type = 'hidden';
	id.name = 'id';
	id.value = book.id;
	form.appendChild(id);

	let title = document.createElement('input');
	title.type = 'text';
	title.name = 'title';
	title.value = book.title;
	form.appendChild(title);
	form.appendChild(document.createElement('br'));

	let author = document.createElement('input');
	author.type = 'text';
	author.name = 'author';
	author.value = book.author;
	form.appendChild(author);
	form.appendChild(document.createElement('br'));


	var genres = [
		"Sci-fi",
		"Fantasy",
		"Thriller",
		"Biography",
		"Religious",
		"Language",
		"Technology/Programming",
		"RPG/Gaming",
	];
	let genre = document.createElement("select");
	genre.name = "genre";
	for (let i = 0; i < genres.length; i++) {
		var option = document.createElement("option");
		option.value = genres[i];
		option.text = genres[i];
		genre.appendChild(option);
	}
	genre.value = book.genre;
	form.appendChild(genre);
	form.appendChild(document.createElement('br'));

	let year = document.createElement('input');
	year.type = 'number';
	year.name = 'year';
	year.value = book.year;
	form.appendChild(year);
	form.appendChild(document.createElement('br'));

	let isbn = document.createElement('input');
	isbn.type = 'text';
	isbn.name = 'isbn';
	isbn.value = book.isbn;
	form.appendChild(isbn);
	form.appendChild(document.createElement('br'));

	let publisher = document.createElement('input');
	publisher.type = 'text';
	publisher.name = 'publisher';
	publisher.value = book.publisher;
	form.appendChild(publisher);
	form.appendChild(document.createElement('br'));

	let submit = document.createElement('input');
	submit.type = 'submit';
	submit.name = 'submit';
	submit.value = 'SUBMIT';
	form.appendChild(submit);
	form.appendChild(document.createElement('br'));

	div.appendChild(form);
	submit.addEventListener('click', updateBook);

}

function updateBook(e) {
	let div = document.getElementById('updateBook');
	let bookDiv = document.getElementById('bookList');
	e.preventDefault();
	let form = document.update;
	let uBook = {};

	uBook.id = form.id.value;
	uBook.title = form.title.value;
	uBook.author = form.author.value;
	uBook.year = form.year.value;
	uBook.genre = form.genre.value;
	uBook.isbn = form.isbn.value;
	uBook.publisher = form.publisher.value;
	postUpdatedBook(uBook);
	while(div.firstElementChild) {
		div.removeChild(div.firstElementChild);
	}
	bookDiv.textContent = '';
}

function postUpdatedBook(book) {
  let bookJSON = JSON.stringify(book);
  let uri = `api/books/${book.id}`;
  let xhr = new XMLHttpRequest();
  xhr.open('PUT', uri);
  
  xhr.setRequestHeader("Content-Type", "Application/json");
  xhr.onreadystatechange = function () {
	  if (xhr.readyState === 4) {
		  if (xhr.status === 200 || xhr.status === 201) {
			  alert('Book Successfully Updated!')
			  var newBook = JSON.parse(xhr.responseText);
			  getBookById(newBook.id);
      } else {
		showErrors('Error updated book');
      }
    }
  };

  xhr.send(bookJSON);
}
