package com.example.booksapi.controllers;

import com.example.booksapi.models.Book;
import com.example.booksapi.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Member;

@RestController
public class BookController {
    @Autowired
    BookService bookService;

    @RestController
    public class BooksApi {
        private final BookService bookService;

        public BooksApi(BookService bookService) {
            this.bookService = bookService;
        }

//        @RequestMapping(value = "/api/books/{id}", method = RequestMethod.PUT)
        @PutMapping("/api/books/{id}")
        public Book update(@PathVariable("id") Long id,
                           @RequestParam(value = "title") String title,
                           @RequestParam(value = "description") String desc,
                           @RequestParam(value = "language") String lang,
                           @RequestParam(value = "pages") Integer numOfPages) {
            Book book = bookService.updateBook(id, title, desc, lang, numOfPages);
            return book;
        }

//        @RequestMapping(value = "/api/books/{id}", method = RequestMethod.DELETE)
        @DeleteMapping("/api/books/{id}")
        public void destroy(@PathVariable("id") Long id) {
            bookService.deleteBook(id);
        }
    }


}
