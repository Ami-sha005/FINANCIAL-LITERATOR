package com.TechTitansAgenticAI.controller;

import com.TechTitansAgenticAI.dto.SchemeRequest;
import com.TechTitansAgenticAI.dto.SchemeResponse;
import com.TechTitansAgenticAI.service.SchemeNavigatorService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/scheme")
@RequiredArgsConstructor

public class SchemeNavigatorController {

    private final SchemeNavigatorService service;

    @PostMapping("/find")
    public SchemeResponse findSchemes(
            @RequestBody SchemeRequest request
    ) {

        return service.findSchemes(

                request.getUser(),

                request.getGoal()

        );

    }

}