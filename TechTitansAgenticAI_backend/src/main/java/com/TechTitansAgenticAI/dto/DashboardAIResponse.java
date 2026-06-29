package com.TechTitansAgenticAI.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DashboardAIResponse {

    private int financialScore;

    private String debtRisk;

    private List<String> insights;

}