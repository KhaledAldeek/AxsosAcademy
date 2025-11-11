package com.example.ninjagold;


import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.Date;
import java.util.Random;

@Controller
public class NinjaGoldController {

    @GetMapping("/")
    public String index(HttpSession session){
        if (session.getAttribute("yourGold") == null)
            session.setAttribute("yourGold", 0);
        if (session.getAttribute("activities") == null)
            session.setAttribute("activities", new ArrayList<String>());
        return "index.jsp";
    }

    @PostMapping("/")
    public String index2(HttpSession session, @RequestParam("hidden") String hiddenValue){
        if(session.getAttribute("yourGold") == null)
            session.setAttribute("yourGold",0);
        if(session.getAttribute("activities") == null)
            session.setAttribute("activities",new ArrayList<String>());

        int gold = (int) session.getAttribute("yourGold");
        ArrayList<String> activities = (ArrayList<String>) session.getAttribute("activities");

        int earned = 0;
        Random random = new Random();
        Date date = new Date();
        switch (hiddenValue){
            case "farm":
                earned = random.nextInt(21);
                activities.add("You entered a farm and earned " + earned + " gold.("+date+")");
                break;
            case "cave":
                earned = random.nextInt(21);
                activities.add("You entered a cave and earned " + earned + " gold.("+date+")");
                break;
            case "house":
                earned = random.nextInt(21);
                activities.add("You entered a house and earned " + earned + " gold.("+date+")");
                break;
            case "quest":
                earned = random.nextInt(-50,51);
                if (earned >= 0)
                    activities.add("You entered a casino and won " + earned + " gold.("+date+")");
                else
                    activities.add("You entered a casino and lost " + Math.abs(earned) + " gold... Ouch.("+date+")");
                break;
        }
        if(gold + earned < 0) {
            session.setAttribute("yourGold", 0);
            gold = 0;
        }
        else
            session.setAttribute("yourGold", gold + earned);

        session.setAttribute("activities", activities);
        return "redirect:/";

    }
}
