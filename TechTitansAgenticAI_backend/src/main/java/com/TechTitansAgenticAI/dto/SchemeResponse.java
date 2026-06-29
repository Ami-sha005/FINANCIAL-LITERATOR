package com.TechTitansAgenticAI.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class SchemeResponse {

    private int eligibilityScore;

    private String estimatedBenefit;

    private String analysis;

    private List<SchemeItem> schemes;
}