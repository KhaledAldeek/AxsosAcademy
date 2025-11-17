package com.example.onetomany.services;

import com.example.onetomany.models.Dojo;
import com.example.onetomany.models.Ninja;
import com.example.onetomany.repositories.NinjaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NinjaService {
    @Autowired
    NinjaRepository ninjaRepository;

    public Ninja create(Ninja ninja) {
        return ninjaRepository.save(ninja);
    }

    public Ninja findDojo(Long id) {
        return ninjaRepository.findById(id).orElse(null);
    }

    public List<Ninja> getAllNinjas(){
        return ninjaRepository.findAll();
    }
}
