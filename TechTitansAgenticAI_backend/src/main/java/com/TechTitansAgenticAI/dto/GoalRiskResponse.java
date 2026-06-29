package com.TechTitansAgenticAI.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class GoalRiskResponse {

    private String goalName;

    private double requiredMonthly;

    private String status;

    private int estimatedDelay;
}