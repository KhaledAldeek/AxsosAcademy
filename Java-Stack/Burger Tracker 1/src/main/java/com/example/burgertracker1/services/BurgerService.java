package com.example.burgertracker1.services;

import com.example.burgertracker1.models.Burger;
import com.example.burgertracker1.repositories.BurgerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ModelAttribute;

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
}
