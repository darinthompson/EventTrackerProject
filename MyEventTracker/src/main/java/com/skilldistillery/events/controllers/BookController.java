package com.skilldistillery.events.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.events.entities.Book;
import com.skilldistillery.events.services.BookService;

@RestController
@RequestMapping("api")
public class BookController {

	@Autowired
	private BookService bookService;
	
	@GetMapping("books")
	private List<Book> getBooks() {
		return bookService.getAllBooks();
	}
}
