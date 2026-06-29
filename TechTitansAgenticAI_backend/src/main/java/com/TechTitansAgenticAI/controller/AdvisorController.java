package com.TechTitansAgenticAI.controller;

import com.TechTitansAgenticAI.dto.ChatRequest;
import com.TechTitansAgenticAI.dto.ChatResponse;
import com.TechTitansAgenticAI.service.AdvisorService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/advisor")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class AdvisorController {

    private final AdvisorService advisorService;

    @PostMapping("/chat")
    public ChatResponse chat(@RequestBody ChatRequest request) {

        String answer = advisorService.askQuestion(

                request.getUserId(),

                request.getMessage()

        );

        return new ChatResponse(answer);

    }
}
