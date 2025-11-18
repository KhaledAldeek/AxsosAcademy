package com.example.bycryptmaterial.services;

import com.example.bycryptmaterial.models.User;
import com.example.bycryptmaterial.models.UserLogin;
import com.example.bycryptmaterial.repositories.UserRepository;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User findByEmail(String email){
        return userRepository.findByEmail(email);
    }

    public User saveUser(User user){
        return  userRepository.save(user);
    }

    public User getUser(Long id){
        return userRepository.findById(id).orElse(null);
    }

    public User register(User user, BindingResult result){
        //1// check the email if exists, you can do that automatically by using @Column(unique = true)
        //2// check (password and confirmation password equality ...)
        //3// if we have errors in our results
        //4// you can hash the password and save the user to the database..
        //2//
        if(!user.getPassword().equals(user.getConfirmPassword())){
            result.rejectValue("Not Match", "passwords not match!");// result.rejectValue(...), will print the error in jsp file...
        }
        //3//
        if(result.hasErrors()){
            return null;
        }
        //4//
        String hashed_pw = BCrypt.hashpw(user.getPassword(),BCrypt.gensalt());
        user.setPassword(hashed_pw);
        return userRepository.save(user);
    }

    public User login(UserLogin loginUser, BindingResult result){
        User myUser = userRepository.findByEmail(loginUser.getLoginEmail());
        //1// if login user is empty
        //2// check the password
        System.out.println(loginUser.getLoginPassword());
        System.out.println( myUser.getPassword());
        if(!BCrypt.checkpw(loginUser.getLoginPassword(), myUser.getPassword())){
            result.rejectValue("loginPassword","Error", "Password is Incorrect");
        }

        if(result.hasErrors()){
            return null;
        }

        return myUser;
    }
}
