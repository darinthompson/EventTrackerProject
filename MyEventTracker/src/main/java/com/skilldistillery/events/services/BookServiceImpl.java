package com.skilldistillery.events.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.events.entities.Book;
import com.skilldistillery.events.repositories.BookRepository;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	BookRepository bookRepo;
	
	@Override
	public List<Book> getAllBooks() {
		return bookRepo.findAll();
	}

	@Override
	public Book getBookById(int id) {
		Optional<Book> bookOpt = bookRepo.findById(id);
		Book book = null;
		if(bookOpt.isPresent()) {
			book = bookOpt.get();
		}
		
		return book;
	}
	


}
