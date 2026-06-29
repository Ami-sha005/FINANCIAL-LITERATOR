package com.TechTitansAgenticAI.dto;

import lombok.Data;

@Data
public class GoalRiskRequest {

    private String goalName;

    private double targetAmount;

    private int years;

    private double monthlySavings;
}