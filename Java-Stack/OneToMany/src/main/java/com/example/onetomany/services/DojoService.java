package com.example.onetomany.services;

import com.example.onetomany.models.Dojo;
import com.example.onetomany.repositories.DojoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DojoService {

    private final DojoRepository dojoRepo;

    public DojoService(DojoRepository dojoRepo) {
        this.dojoRepo = dojoRepo;
    }

    public Dojo create(Dojo dojo) {
        return dojoRepo.save(dojo);
    }

    public Dojo findDojo(Long id) {
        return dojoRepo.findById(id).orElse(null);
    }

    public List<Dojo> getAllDojos(){
        return dojoRepo.findAll();
    }
}