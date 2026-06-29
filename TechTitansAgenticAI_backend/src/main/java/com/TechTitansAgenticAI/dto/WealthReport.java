package com.TechTitansAgenticAI.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class WealthReport {

    private double healthScore;

    private double savingsRate;

    private double expenseRatio;

    private double debtRatio;

    private String financialStatus;

}