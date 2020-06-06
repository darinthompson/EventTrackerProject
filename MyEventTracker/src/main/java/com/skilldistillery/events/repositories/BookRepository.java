package com.skilldistillery.events.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.skilldistillery.events.entities.Book;

public interface BookRepository extends JpaRepositoryImplementation<Book, Integer> {
	List<Book> findBookByTitleLike(String title);
}
