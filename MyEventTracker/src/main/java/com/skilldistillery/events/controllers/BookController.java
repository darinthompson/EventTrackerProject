package com.skilldistillery.events.controllers;


import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@GetMapping("books/{id}")
	private Book getBookById(@PathVariable int id) {
		return bookService.getBookById(id);
	}
	
	@PostMapping("books")
	private Book create(@RequestBody Book book, HttpServletRequest request, HttpServletResponse response) {
		Book newBook = null;
		try {
			newBook = bookService.create(book);
			response.setStatus(201);
			StringBuffer url = request.getRequestURL();
			url.append("/" + book.getId());
			response.setHeader("Location", url.toString());
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
			book = null;
		}
		return newBook;
	}
}
