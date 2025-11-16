package com.example.burgertracker1.controllers;

import com.example.burgertracker1.models.Burger;
import com.example.burgertracker1.services.BurgerService;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class BurgerController {
    @Autowired
    BurgerService burgerService;

    @GetMapping("/")
    public String index(Model model){
        model.addAttribute("burgers", burgerService.getAllBurgers());
        model.addAttribute("burger", new Burger());
        return "index.jsp";
    }

    @PostMapping("/addBurger")
    public String submitBurger(@Valid @ModelAttribute("burger") Burger burger,
                               BindingResult result,
                               Model model) {
        if(result.hasErrors()){
            model.addAttribute("burgers", burgerService.getAllBurgers());
            return "index.jsp";
        }else {
            burgerService.addBurger(burger);
            return "redirect:/";
        }
    }

}
