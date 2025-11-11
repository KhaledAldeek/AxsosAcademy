package com.example.hellohuman;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloHumanController {

    @GetMapping("/")
    public String helloHuman(@RequestParam(value = "q", required = false) String name){
        if(name == null){
            return "Hello Human";
        }else{
            return "Hello "+name;
        }
    }

}
