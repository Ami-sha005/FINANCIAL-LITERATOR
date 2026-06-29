package com.TechTitansAgenticAI.controller;

import com.TechTitansAgenticAI.dto.FutureMapRequest;
import com.TechTitansAgenticAI.service.FutureMapService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
@RestController
@RequestMapping("/futuremap")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class FutureMapController {

    private final FutureMapService service;

    @PostMapping("/generate")
    public String generate(

            @RequestBody FutureMapRequest request){

        return service.generatePlan(

                request.getUser(),

                request.getGoal());
    }
}