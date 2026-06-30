package com.TechTitansAgenticAI.controller;
import com.TechTitansAgenticAI.dto.AIGuardianResponse;
import com.TechTitansAgenticAI.dto.AIGuardianRequest;
import com.TechTitansAgenticAI.service.AIGuardianService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/guardian")
@RequiredArgsConstructor
public class AIGuardianController {

    private final AIGuardianService service;

    @PostMapping("/analyze")
    public AIGuardianResponse analyze(
            @RequestBody AIGuardianRequest request){

        return service.analyze(request);
    }
}