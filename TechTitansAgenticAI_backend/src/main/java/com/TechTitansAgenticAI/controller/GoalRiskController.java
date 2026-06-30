package com.TechTitansAgenticAI.controller;

import com.TechTitansAgenticAI.dto.GoalRiskRequest;
import com.TechTitansAgenticAI.dto.GoalRiskResponse;
import com.TechTitansAgenticAI.service.GoalRiskService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/goalrisk")
@RequiredArgsConstructor

public class GoalRiskController {

    private final GoalRiskService service;

    @PostMapping("/analyze")
    public GoalRiskResponse analyze(
            @RequestBody GoalRiskRequest request
    ){

        return service.analyze(request);
    }
}