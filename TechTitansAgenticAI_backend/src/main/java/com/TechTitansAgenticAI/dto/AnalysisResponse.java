package com.TechTitansAgenticAI.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AnalysisResponse {

    private String wealthAnalysis;

    private String futureMap;

    private String schemes;

}