package com.example.booksapi.services;

import com.example.booksapi.models.Book;
import com.example.booksapi.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    //DI, IOC
    @Autowired
    BookRepository bookRepository;

//    public BookService(BookRepository bookRepository){
//        this.bookRepository = bookRepository;
//    }

    public List<Book> allBooks() {
        return bookRepository.findAll();
    }

    public Book createBook(Book b) {
        return bookRepository.save(b);
    }

    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        return optionalBook.orElse(null);
    }

        //get update save
    public Book updateBook(Long id, String title, String desc, String lang, int pages) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        Book book = optionalBook.orElse(null);
        book.setTitle(title);
        book.setDescription(desc);
        book.setLanguage(lang);
        book.setNumberOfPages(pages);
        bookRepository.save(book);
        return book;
    }

    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }


}
