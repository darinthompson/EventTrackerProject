## Event Tracker Project

### Week 11 - 13 Project for Skill Distillery

## Overview
This in terms of difficulty isn't the most of rigorous projects. I fancy myself an avid reader and collector of books. I have always wanted a way to
cataloge the books in my personal library and that is just what I have done. At this moment it's a database with one table that describes a book in 
just the way I need. Perhaps further iterations of this project will add a 'user' class so I can give the project a library type feel and can keep track 
of who I might have loaned a book out. 

## API Endpoints
| RETUNS | VERB | URI | DESCRIPTION |
|--------|------|-----|------------ |
|List&lt;Book&gt; | GET | api/books | Retrieve list of books |
|Book | Get | api/books/{id} | Get book by id |
|List&lt;Book&gt; | GET | api/books/search/title/{title} | Get books by title LIKE |
|List&lt;Book&gt; | GET | api/books/search/genre/{genre} | Get books by Genre |
|List&lt;Book&gt; | GET | api/books/search/author/{author} | Get books by author LIKE |
|Book | POST | api/books | Creates a new book |
|Book | PUT | api/books/{id} | Updates book |
|Boolean | DELETE | api/books/{id} | Deletes a book |

##Technologies Used
* MySQL, MySQL Workbench
* JPA/Hibernate
* Spring Boot
* Spring Data JPA
* Git/Github
* VIM
* La Croix - Razz-Cranberry
* Nu-Funk playlist - Spotify

##Lessons Learned
- This project was pretty straight forward. It was more of a simple exercise helping to cement concepts built upon from ealier projects. Learning more
of Spring and capabilities of boot makes things a little easier. Can't complain.
