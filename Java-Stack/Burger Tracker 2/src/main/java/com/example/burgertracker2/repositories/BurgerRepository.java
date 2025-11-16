package com.example.burgertracker2.repositories;

import com.example.burgertracker2.models.Burger;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BurgerRepository extends CrudRepository<Burger, Long> {
    List<Burger> findAll();
    Optional<Burger> findById(Long id);
}
