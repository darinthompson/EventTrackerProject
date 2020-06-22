export class Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  year: number;
  isbn: string;
  publisher: string;

  constructor(id?: number, title?: string, author?: string, genre?: string, year?: number, isbn?: string, publisher?: string) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.year = year;
    this.isbn = isbn;
    this.publisher = publisher;
  }
}

