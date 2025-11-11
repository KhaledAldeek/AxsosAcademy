package com.example.omikujiform;


import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class OmikujiController {

    @GetMapping("/omikuji")
    public String index(){
        return "index.jsp";
    }

    @PostMapping("/omikuji")
    public String processOmikuji(HttpSession session,
                                 @RequestParam("years") int years,
                                 @RequestParam("city") String city,
                                 @RequestParam("person") String person,
                                 @RequestParam("hobby") String hobby,
                                 @RequestParam("livingThing") String livingThing,
                                 @RequestParam("message") String message) {
        session.setAttribute("visited", 0);
        session.setAttribute("years", years);
        session.setAttribute("city", city);
        session.setAttribute("person", person);
        session.setAttribute("hobby", hobby);
        session.setAttribute("livingThing", livingThing);
        session.setAttribute("message", message);
        return "redirect:/omikuji/show";
    }

    @GetMapping("/omikuji/show")
    public String index3(HttpSession session){
        if(session.getAttribute("visited") != null)
            return "index3.jsp";
        return "redirect:/omikuji";
    }
}
