package com.example.bycryptmaterial.controllers;

import com.example.bycryptmaterial.models.User;
import com.example.bycryptmaterial.models.UserLogin;
import com.example.bycryptmaterial.services.UserService;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.graphql.GraphQlProperties;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Optional;

@Controller
public class MainController {

    @Autowired
    UserService userService;

    @GetMapping("/")
    public String index(@ModelAttribute("user") User user,
                        @ModelAttribute("loginUser") UserLogin loginUser,
                        HttpSession session){
        if(session.getAttribute("User") != null){
            return "redirect:/welcome";
        }
        return "index.jsp";
    }

    @PostMapping("/createUser")//check the email if unique
    public String createUser(@Valid @ModelAttribute("user") User user,
                             BindingResult result,
                             @ModelAttribute("loginUser") UserLogin loginUser,
                             HttpSession session ){
        User signedUpUser = userService.register(user, result);
        if (signedUpUser == null) {
            return "index.jsp";
        }
        session.setAttribute("User",signedUpUser);
        return "redirect:/welcome";
    }

    @PostMapping("/login")
    public String login(@Valid @ModelAttribute("loginUser") UserLogin loginUser,
                        BindingResult result,
                        HttpSession session,
                        Model model){
        User user = userService.login(loginUser, result);
        if (user == null){
            model.addAttribute("user",new User());
            return "index.jsp";
        }
        session.setAttribute("User", user.getId());
        return "redirect:/welcome";
    }

    @GetMapping("/welcome")
    public String userShow(HttpSession session,
                           @ModelAttribute("loginUser") UserLogin loginUser, Model model){
//        model.addAttribute("user",userService.getUser((Long)session.getAttribute("id")));
        //Authentication
        if(session.getAttribute("User") == null){
            return "redirect:/";//flash data
        }
        User user = userService.getUser((Long)session.getAttribute("User"));
        model.addAttribute("currentUser", user);
        return "welcome.jsp";
    }

    @GetMapping("/welcome/logout")
    public String logout(HttpSession session){
        session.setAttribute("User", null);
        return "redirect:/welcome";
    }
}
