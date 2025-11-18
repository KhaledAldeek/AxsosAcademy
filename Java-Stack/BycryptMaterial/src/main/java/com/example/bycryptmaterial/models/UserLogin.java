package com.example.bycryptmaterial.models;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class UserLogin {
    @NotBlank
    @Email(message = "Email must be Valid")
    private String loginEmail;

    @NotBlank
    @Size(min = 8, message = "Password must be at least 8 characters.")
    private String loginPassword;

    public UserLogin(String loginEmail, String loginPassword) {
        this.loginEmail = loginEmail;
        this.loginPassword = loginPassword;
    }

    public UserLogin(){}

    public String getLoginEmail() {
        return loginEmail;
    }

    public void setLoginEmail(String loginEmail) {
        this.loginEmail = loginEmail;
    }

    public String getLoginPassword() {
        return loginPassword;
    }

    public void setLoginPassword(String loginPassword) {
        this.loginPassword = loginPassword;
    }
}
