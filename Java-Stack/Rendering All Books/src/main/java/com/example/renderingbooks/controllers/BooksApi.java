package com.example.renderingbooks.controllers;

import com.example.renderingbooks.models.Book;
import com.example.renderingbooks.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class BooksApi {

    @Autowired
    BookService bookService;

//    @RequestMapping(value = "/api/books/{id}", method = RequestMethod.PUT)
    @PutMapping("/api/books/{id}")
    public Book update(@PathVariable("id") Long id,
                       @RequestParam(value = "title") String title,
                       @RequestParam(value = "description") String desc,
                       @RequestParam(value = "language") String lang,
                       @RequestParam(value = "pages") Integer numOfPages) {
        Book book = bookService.updateBook(id, title, desc, lang, numOfPages);
        return book;
    }

//    @RequestMapping(value = "/api/books/{id}", method = RequestMethod.DELETE)
    @DeleteMapping("/api/books/{id}")
    public void destroy(@PathVariable("id") Long id) {
        bookService.deleteBook(id);
    }
}