package com.skilldistillery.events.services;


import java.util.List;

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

}
