package com.example.savetravel.services;

import com.example.savetravel.models.Expense;
import com.example.savetravel.repositories.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService {

    @Autowired
    private ExpenseRepository expenseRepository;

    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }
    public void addExpense(Expense expense) {
        expenseRepository.save(expense);
    }

    public Expense getExpense(Long id) {
        return expenseRepository.findById(id).orElse(null);
    }
    public void updateExpense(Long id, Expense updatedExpense) {
        Expense existingExpense = expenseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Expense not found"));

        existingExpense.setExpenseName(updatedExpense.getExpenseName());
        existingExpense.setVendor(updatedExpense.getVendor());
        existingExpense.setAmount(updatedExpense.getAmount());
        existingExpense.setDescription(updatedExpense.getDescription());

        expenseRepository.save(existingExpense);
    }

    public void deleteExpense(Long id){
        expenseRepository.deleteById(id);
    }
}
