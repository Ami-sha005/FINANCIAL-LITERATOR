package com.TechTitansAgenticAI.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AIGuardianResponse {

    private int guardianScore;

    private String riskLevel;

    private String recommendations;

    private String report;
}
