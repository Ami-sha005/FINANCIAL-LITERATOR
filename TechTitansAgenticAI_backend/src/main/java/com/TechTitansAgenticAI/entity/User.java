package com.TechTitansAgenticAI.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Authentication

    @Column(unique = true)
    private String email;

    private String password;

    // Personal Information

    private String name;

    private int age;

    private String occupation;

    // Financial Information

    private double monthlyIncome;

    private double monthlyExpenses;

    private double savings;

    private double debt;

}