package com.TechTitansAgenticAI.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class FutureMapReport {

    private String goalName;

    private double monthlyRequired;

    private String risk;

    private String roadmap;

}