package com.example.savetravel.controllers;

import com.example.savetravel.models.Expense;
import com.example.savetravel.services.ExpenseService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
public class ExpenseController {

    @Autowired
    private ExpenseService expenseService;

    // Display all expenses and form to add new expense
    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("expenses", expenseService.getAllExpenses());
        model.addAttribute("expense", new Expense());
            return "index.jsp";
    }

    // Handle adding a new expense
    @PostMapping("/addExpense")
    public String addExpense(@Valid @ModelAttribute("expense") Expense expense,
                             BindingResult result,
                             Model model) {
        if (result.hasErrors()) {
            model.addAttribute("expenses", expenseService.getAllExpenses());
            return "index.jsp";
        } else {
            expenseService.addExpense(expense);
            return "redirect:/";
        }
    }

    // Display edit form for an expense
    @GetMapping("/edit/{id}")
    public String editExpenseForm(@PathVariable("id") Long id, Model model) {
        model.addAttribute("expense", expenseService.getExpense(id));
        return "edit.jsp";
    }

    // Handle updating an existing expense
    @PostMapping("/edit/{id}")
    public String editExpense(@PathVariable("id") Long id,
                              @Valid @ModelAttribute("expense") Expense expense,
                              BindingResult result,
                              Model model) {
        if (result.hasErrors()) {
            model.addAttribute("expense", expenseService.getExpense(id));
            return "edit.jsp";
        } else {
            expenseService.updateExpense(id, expense);
            return "redirect:/";
        }
    }

    @GetMapping("/expenses/{id}")
    public String show(Model model,
                       @PathVariable("id") Long id) {
        model.addAttribute("expense", expenseService.getExpense(id));
        return "show.jsp";
    }

    @PostMapping("/delete/{id}")
    public String delete(@PathVariable("id") Long id){
        expenseService.deleteExpense(id);
        return "redirect:/";
    }
}
