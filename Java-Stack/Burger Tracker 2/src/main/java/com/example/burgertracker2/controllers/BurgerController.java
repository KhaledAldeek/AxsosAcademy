package com.example.burgertracker2.controllers;

import com.example.burgertracker2.models.Burger;
import com.example.burgertracker2.services.BurgerService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
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

    @GetMapping("/edit/{id}")
    public String edit(Model model,
                       @PathVariable("id") Long id){
        model.addAttribute("burger", burgerService.getBurger(id));
        return "edit.jsp";
    }

    @PostMapping("/edit/{id}")
    public String edit(Model model,
                       @PathVariable("id") Long id,
                       @Valid @ModelAttribute Burger burger,
                       BindingResult result){
        if(result.hasErrors()){
            model.addAttribute("burger", burgerService.getBurger(id));
            return "edit.jsp";
        }else{
            burgerService.updateBurger(id, burger);
            return "redirect:/";
        }
    }

}
