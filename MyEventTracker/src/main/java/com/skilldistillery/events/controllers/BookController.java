package com.skilldistillery.events.controllers;


import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.aspectj.lang.annotation.DeclareMixin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	public List<Book> getBooks() {
		return bookService.getAllBooks();
	}
	
	@GetMapping("books/{id}")
	public Book getBookById(@PathVariable int id) {
		return bookService.getBookById(id);
	}
	
	@PostMapping("books")
	public Book create(@RequestBody Book book, HttpServletRequest request, HttpServletResponse response) {
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
	
	@PutMapping("books/{id}")
	public Book update(@PathVariable int id, @RequestBody Book book) {
		return bookService.update(id, book);
	}
	
	@DeleteMapping("books/{id}")
	public boolean delete(@PathVariable int id, HttpServletRequest request, HttpServletResponse response) {
		if(bookService.delete(id)) {
			response.setStatus(204);
			return true;
		} else {
			response.setStatus(400);
			return false;
		}
	}
	
	@GetMapping("books/search/{title}")
	public List<Book> findBooksByTitle(@PathVariable String title) {
		return bookService.findBooksByTitle(title);
	}
}
