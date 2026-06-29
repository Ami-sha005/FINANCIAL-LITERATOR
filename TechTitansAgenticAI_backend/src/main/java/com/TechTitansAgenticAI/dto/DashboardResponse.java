package com.TechTitansAgenticAI.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class DashboardResponse {

    // AI Generated

    private int financialScore;

    private String debtRisk;

    private List<String> insights;

    private String recommendation;

    // Financial Data

    private double savings;

    private double monthlyCashFlow;

    private int benefitsAvailable;

    // Profile

    private int age;

    private String occupation;

    private String riskProfile;

    private String location;

    // Dashboard

    private List<DashboardGoal> goals;

    private List<DashboardExpense> expenses;

}
