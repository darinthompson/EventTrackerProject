import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl ='http://localHost:8083/';
  private url = environment.baseUrl + 'api/books';

  constructor(private http: HttpClient) { }

  index() {
    return this.http.get<Book[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('erros getting Books');
      })
    );
  }

  create(book: Book) {
    return this.http.post<Book>(this.url, book).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Error creating todo');
      })
    );
  }

  destroy(id: number) {
    return this.http.delete<Book>(this.url + "/" + id).pipe (
      catchError((err: any) => {
        console.log(err);
        return throwError("error deleting book");
      })
    );
  }

  update(book: Book) {
    return this.http.put<Book>(this.url + "/"+ book.id, book).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError("error updating Book");
      })
    );
  }
}
