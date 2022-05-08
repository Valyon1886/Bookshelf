package com.spring.security.postgresql.controllers;

import java.util.List;

import com.spring.security.postgresql.models.Example;
import com.spring.security.postgresql.services.ExampleService;
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
@RequestMapping(value = "api/examples")
public class ExampleController {

    private final ExampleService exampleService;

    @GetMapping("/")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public List<Example> getAll() {
        return exampleService.findAll();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public Example getById(@PathVariable Long id) {
        return exampleService.findById(id);
    }

    @PostMapping("/")
    @PreAuthorize("hasRole('ADMIN')")
    public Example create(@RequestBody Example example) {
        return exampleService.create(example);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public void delete(@PathVariable Long id) {
        exampleService.delete(id);
    }

    @PutMapping("/")
    @PreAuthorize("hasRole('ADMIN')")
    public Example update(@RequestBody Example example) {
        return exampleService.update(example);
    }

}
