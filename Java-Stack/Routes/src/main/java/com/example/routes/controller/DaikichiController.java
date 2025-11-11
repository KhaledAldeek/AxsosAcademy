package com.example.routes.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/daikichi")
public class DaikichiController {

    @GetMapping("")
    public String index(){
        return "Welcome!";
    }

    @GetMapping("/today")
    public String index2(){
        return "Today you will find luck in all your endeavors!";
    }

    @GetMapping("/tomorrow")
    public String index3(){
        return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
    }

}
