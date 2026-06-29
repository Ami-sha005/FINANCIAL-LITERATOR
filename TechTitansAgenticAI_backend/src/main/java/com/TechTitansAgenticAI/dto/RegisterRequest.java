package com.TechTitansAgenticAI.dto;

import lombok.Data;

@Data
public class RegisterRequest {

    private String name;

    private String email;

    private String password;

    private int age;

    private String occupation;

    private double monthlyIncome;

    private double monthlyExpenses;

    private double savings;

    private double debt;

}