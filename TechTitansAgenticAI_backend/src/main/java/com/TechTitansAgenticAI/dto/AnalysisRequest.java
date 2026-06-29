package com.TechTitansAgenticAI.dto;

import com.TechTitansAgenticAI.entity.Goal;
import com.TechTitansAgenticAI.entity.User;
import lombok.Data;

@Data
public class AnalysisRequest {

    private User user;

    private Goal goal;

}