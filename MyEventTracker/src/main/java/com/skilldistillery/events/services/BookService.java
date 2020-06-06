package com.skilldistillery.events.services;


import java.util.List;

import com.skilldistillery.events.entities.Book;

public interface BookService {
	List<Book> getAllBooks();
	Book getBookById(int id);
}
