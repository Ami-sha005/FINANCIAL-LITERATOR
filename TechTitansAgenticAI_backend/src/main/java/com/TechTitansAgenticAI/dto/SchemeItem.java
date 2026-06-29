package com.TechTitansAgenticAI.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SchemeItem {

    private String name;

    private String description;

    private String benefits;

    private String eligibility;

    private String officialWebsite;

}