package com.example.burgertracker2.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.hibernate.validator.constraints.NotBlank;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Entity
@Table(name="burgers")
public class Burger {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull()
    @NotBlank(message = "Burger Name must not be blank")
    @Size(min = 5, max = 50, message = "Burger Name must be between 5 and 50 characters")
    private String burgerName;

    @NotNull(message = "Restaurant Name must not be blank")
    @NotBlank(message = "Restaurant Name must not be blank")
    @Size(min = 5, max = 50, message = "Restaurant Name must be between 5 and 50 characters")
    private String restaurantName;

    @Min(value = 1, message = "Rating must be between (1-5)")
    @Max(value = 5, message = "Rating must be between (1-5)")
    private int rating;

    @NotNull
    @NotBlank(message = "Restaurant Name must not be blank")
    @Size(min = 5, message = "Restaurant Name must be at least 5 characters")
    private String notes;

    @Column(updatable=false)

    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;

    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;

    public Burger(){}

    public Burger(String burgerName, String restaurantName, int rating) {
        this.burgerName = burgerName;
        this.rating = rating;
        this.restaurantName = restaurantName;
    }

    public String getBurgerName() {
        return burgerName;
    }

    public void setBurgerName(String burgerName) {
        this.burgerName = burgerName;
    }

    public Date getCreatedAt() {
        return createdAt;
    }


    public Long getId() {
        return id;
    }


    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getRestaurantName() {
        return restaurantName;
    }

    public void setRestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }

}
