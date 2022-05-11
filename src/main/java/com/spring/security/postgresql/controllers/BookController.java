package com.spring.security.postgresql.controllers;

import java.util.List;

import com.spring.security.postgresql.models.Book;
import com.spring.security.postgresql.services.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "api/books")
public class BookController {

    private final BookService BookService;

    @GetMapping("/")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public List<Book> getAll() {
        return BookService.findAll();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public Book getById(@PathVariable Long id) {
        return BookService.findById(id);
    }

    @PostMapping("/")
    @PreAuthorize("hasRole('ADMIN')")
    public Book create(@RequestBody Book Book) {
        return BookService.create(Book);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public void delete(@PathVariable Long id) {
        BookService.delete(id);
    }

    @PutMapping("/")
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    public Book update(@RequestBody Book Book) {
        return BookService.update(Book);
    }

    @PutMapping("/")
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    public Book updateAmount(@RequestBody Book Book) {
        return BookService.update(Book);
    }

}
