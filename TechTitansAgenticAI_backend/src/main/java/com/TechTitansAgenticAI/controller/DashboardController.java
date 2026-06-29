package com.TechTitansAgenticAI.controller;

import com.TechTitansAgenticAI.dto.DashboardAIAnalysis;
import com.TechTitansAgenticAI.dto.DashboardResponse;
import com.TechTitansAgenticAI.entity.User;
import com.TechTitansAgenticAI.repository.UserRepository;
import com.TechTitansAgenticAI.service.DashboardAIService;
import com.TechTitansAgenticAI.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/dashboard")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class DashboardController {

    private final DashboardService dashboardService;
    private final DashboardAIService dashboardAIService;
    private final UserRepository userRepository;

    @GetMapping("/{userId}")
    public DashboardResponse getDashboard(
            @PathVariable Long userId
    ) {

        User user = userRepository.findById(userId)
                .orElseThrow(() ->
                        new RuntimeException("User not found.")
                );

        return dashboardService.getDashboard(user);
    }

    @GetMapping("/{userId}/ai")
    public DashboardAIAnalysis getDashboardAI(
            @PathVariable Long userId
    ) {

        User user = userRepository.findById(userId)
                .orElseThrow(() ->
                        new RuntimeException("User not found.")
                );

        return dashboardAIService.analyze(user);
    }
}
