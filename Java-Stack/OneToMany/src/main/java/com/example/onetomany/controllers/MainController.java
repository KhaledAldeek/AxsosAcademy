package com.example.onetomany.controllers;

import com.example.onetomany.models.Dojo;
import com.example.onetomany.models.Ninja;
import com.example.onetomany.services.DojoService;
import com.example.onetomany.services.NinjaService;
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
public class MainController {
    @Autowired
    DojoService dojoService;
    @Autowired
    private NinjaService ninjaService;

    @GetMapping("/")
    public String newDojo(@ModelAttribute("dojo") Dojo dojo,
                          Model model) {
        model.addAttribute("dojo", new Dojo());
        return "index.jsp";
    }

    @PostMapping("/create_dojo")
    public String createDojo(
            @Valid @ModelAttribute("dojo") Dojo dojo,
            BindingResult result) {

        if(result.hasErrors()) {
            return "index.jsp";
        }

        Dojo newDojo = dojoService.create(dojo);
        return "redirect:/";
    }

    @GetMapping("/ninja")
    public String newNinja(@ModelAttribute("ninja") Ninja ninja,
                          Model model) {
        model.addAttribute("dojos", dojoService.getAllDojos());
        return "index2.jsp";
    }

    @PostMapping("/create_ninja")
    public String createNinja(
            @Valid @ModelAttribute("ninja") Ninja ninja,
            BindingResult result,
            Model model) {
        if(result.hasErrors()) {
            model.addAttribute("dojos", dojoService.getAllDojos());
            return "index2.jsp";
        }
        ninjaService.create(ninja);
        return "redirect:/ninja";
    }

    @GetMapping("/dojos/{id}")
    public String index3(@PathVariable("id") Long id,
                         Model model){
        Dojo dojo = dojoService.findDojo(id);
        if(dojo == null || dojo.getNinjas().size() == 0 ){
            model.addAttribute("id", id);
            return "index4.jsp";
        }
        model.addAttribute("ninjas", dojo.getNinjas());
        return "index3.jsp";
    }

}
