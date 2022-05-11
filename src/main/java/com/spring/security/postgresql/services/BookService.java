package com.spring.security.postgresql.services;

import java.util.List;

import com.spring.security.postgresql.models.Book;
import com.spring.security.postgresql.repositories.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BookService {

    private final BookRepository BookRepository;

    public List<Book> findAll() {
        return BookRepository.findAll();
    }

    public Book findById(Long id) {
        return BookRepository.findById(id).get();
    }

    public Book create(Book Book) {
        return BookRepository.save(Book);
    }

    public Book update(Book Book) {
        Book old = BookRepository.findById(Book.getId()).get();
        old.setBookName(Book.getBookName());
        old.setAmount(Book.getAmount());//
        return BookRepository.save(old);
    }

    public Book updateAmount(Book Book) {
        Book old = BookRepository.findById(Book.getId()).get();
        old.setBookName(Book.getBookName());
        old.setAmount(Book.getAmount());//
        return BookRepository.save(old);
    }

    public void delete(Long id) {
        BookRepository.deleteById(id);
    }

}
