import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  library: Book[] = [];
  editBook = null;
  newBook = new Book();
  selected = null;
  createBook = null;

  constructor(
    private bookService: BookService
  ) { }

  reload() {
    return this.bookService.index().subscribe(
      success => {
        this.library = success;
        this.selected = null;
        this.createBook = null;
        console.log("WE DID IT!");
      },
      fail => {
        console.log("error")
      }
    );
  }

  addBook() {
    this.bookService.create(this.newBook).subscribe(
      success => {
        alert(`newBook.title` + 'created successfully');
        this.reload();
      },
      fail => {
        alert('Error creating new book')
      }
    );
  }

  deleteBook(id: number) {
    this.bookService.destroy(id).subscribe(
      success => {
        alert('Delete Successful');
        this.reload();
      },
      fail => {
        alert('Error deleting book');
      }
    )
  }

  updateBook(book: Book) {
    this.bookService.update(book).subscribe(
      success => {
        alert('Update Successful!');
        this.reload();
      },
      fail => {
        alert('Error updating Book!');
      }
    )
  }

  ngOnInit(): void {
    this.reload();
  }

  getBookCount() {
    return this.library.length;
  }

  displayBook(book: Book) {
    this.selected = book;
  }

  displayLibrary() {
    this.selected = null;
  }

  setEditBook() {
    this.editBook = Object.assign({}, this.selected);
  }

  showBookForm() {
    this.createBook = true;
  }

}
