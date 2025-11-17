package com.example.onetomany.repositories;

import com.example.onetomany.models.Dojo;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DojoRepository extends CrudRepository<Dojo, Long> {
    List<Dojo> findAll();
}