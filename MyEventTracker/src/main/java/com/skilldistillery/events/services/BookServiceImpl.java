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
	
	@Override
	public Book create(Book book) {
		Book newBook = bookRepo.save(book);
		return newBook;
	}
	
	@Override
	public Book update(int id, Book book) {
		Optional<Book> bookOpt = bookRepo.findById(id);
		Book updatedBook = null;
		if(bookOpt.isPresent()) {
			updatedBook = bookOpt.get();
			updatedBook.setTitle(book.getTitle());
			updatedBook.setAuthor(book.getAuthor());
			updatedBook.setGenre(book.getGenre());
			updatedBook.setYear(book.getYear());
			updatedBook.setIsbn(book.getIsbn());
			updatedBook.setUrl(book.getUrl());
			updatedBook.setPublisher(book.getPublisher());
			bookRepo.saveAndFlush(updatedBook);			
		}
		return updatedBook;
	}
	
	@Override
	public boolean delete(int id) {
		Optional<Book> bookOpt = bookRepo.findById(id);
		if(bookOpt.isPresent()) {
			bookRepo.delete(bookOpt.get());
			return true;
		} else {
			return false;
		}
	}
	
	@Override
	public List<Book> findBooksByTitle(String title) {
		title = "%" + title + "%";
		return bookRepo.findBookByTitleLike(title);
	}


}
