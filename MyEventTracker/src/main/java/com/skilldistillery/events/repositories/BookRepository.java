package com.skilldistillery.events.repositories;


import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.skilldistillery.events.entities.Book;

public interface BookRepository extends JpaRepositoryImplementation<Book, Integer> {
	
}
