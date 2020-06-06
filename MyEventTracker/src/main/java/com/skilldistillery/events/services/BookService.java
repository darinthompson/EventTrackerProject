package com.skilldistillery.events.services;


import java.util.List;

import com.skilldistillery.events.entities.Book;

public interface BookService {
	List<Book> getAllBooks();
	List<Book> findBooksByTitle(String title);
	Book getBookById(int id);
	Book create(Book book);
	Book update(int id, Book book);
	List<Book> findBooksByGenre(String genre);
	List<Book> findBooksByAuthor(String author);
	
	boolean delete(int id);
	
}
