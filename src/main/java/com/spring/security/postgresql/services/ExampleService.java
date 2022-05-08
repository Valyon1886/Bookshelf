package com.spring.security.postgresql.services;

import java.util.List;

import com.spring.security.postgresql.models.Example;
import com.spring.security.postgresql.repositories.ExampleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ExampleService {

    private final ExampleRepository exampleRepository;

    public List<Example> findAll() {
        return exampleRepository.findAll();
    }

    public Example findById(Long id) {
        return exampleRepository.findById(id).get();
    }

    public Example create(Example example) {
        return exampleRepository.save(example);
    }

    public Example update(Example example) {
        Example old = exampleRepository.findById(example.getId()).get();
        old.setExampleText(example.getExampleText());
        return exampleRepository.save(old);
    }

    public void delete(Long id) {
        exampleRepository.deleteById(id);
    }

}
