package com.example.burgertracker2.services;

import com.example.burgertracker2.models.Burger;
import com.example.burgertracker2.repositories.BurgerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BurgerService {
    @Autowired
    BurgerRepository burgerRepository;

    public List<Burger> getAllBurgers(){
        return burgerRepository.findAll();
    }
    public void addBurger(Burger burger){
        burgerRepository.save(burger);
    }
    public Burger getBurger(Long id){
        return burgerRepository.findById(id).orElse(null);
    }
    public void updateBurger(Long id, Burger updatedBurger) {
        Burger existingBurger = burgerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Burger not found"));

        existingBurger.setBurgerName(updatedBurger.getBurgerName());
        existingBurger.setRestaurantName(updatedBurger.getRestaurantName());
        existingBurger.setRating(updatedBurger.getRating());
        existingBurger.setNotes(updatedBurger.getNotes());

        burgerRepository.save(existingBurger);
    }
}
