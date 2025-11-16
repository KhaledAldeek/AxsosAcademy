package com.example.renderingbooks.controllers;

import com.example.renderingbooks.models.Book;
import com.example.renderingbooks.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.lang.reflect.Member;

@Controller
public class BookController {
    @Autowired
    BookService bookService;

    @GetMapping("/books/{id}")
    public String showBook(@PathVariable("id") Long id, Model model){
        Book book = bookService.findBook(id);
        model.addAttribute("book",book);
        return "show.jsp";
    }

}
