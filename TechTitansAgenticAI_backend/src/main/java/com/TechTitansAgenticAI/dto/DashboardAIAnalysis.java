package com.TechTitansAgenticAI.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DashboardAIAnalysis {

    private int financialScore;

    private String debtRisk;

    private List<String> insights;

    private String recommendation;

}
