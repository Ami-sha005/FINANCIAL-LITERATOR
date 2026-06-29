package com.TechTitansAgenticAI.controller;

import com.TechTitansAgenticAI.dto.AgentRequest;
import com.TechTitansAgenticAI.dto.AnalysisResponse;
import com.TechTitansAgenticAI.service.AgentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/agent")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AgentController {

    private final AgentService agentService;

    @PostMapping("/analyze")
    public AnalysisResponse analyze(

            @RequestBody AgentRequest request){

        return agentService.analyze(

                request.getUser(),

                request.getGoal());
    }
}