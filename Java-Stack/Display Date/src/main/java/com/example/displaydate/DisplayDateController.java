package com.example.displaydate;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DisplayDateController {

    @GetMapping("/")
    public String index() {
        return "primary.jsp";
    }

    @GetMapping("/time")
    public String time() {
        return "time.jsp";
    }

    @GetMapping("/date")
    public String date() {
        return "date.jsp";
    }
}
