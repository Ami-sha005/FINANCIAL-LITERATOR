package com.TechTitansAgenticAI.controller;

import com.TechTitansAgenticAI.entity.User;
import com.TechTitansAgenticAI.service.WealthTrackerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
@RestController
@RequestMapping("/wealth")
@RequiredArgsConstructor

public class WealthTrackerController {

    private final WealthTrackerService wealthTrackerService;

    @PostMapping("/analyze")
    public String analyze(

            @RequestBody User user){

        return wealthTrackerService.analyze(user);
    }
}