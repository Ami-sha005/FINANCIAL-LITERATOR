package com.TechTitansAgenticAI.controller;

import com.TechTitansAgenticAI.dto.AuthResponse;
import com.TechTitansAgenticAI.dto.LoginRequest;
import com.TechTitansAgenticAI.dto.RegisterRequest;
import com.TechTitansAgenticAI.service.AuthService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor

public class AuthController {

    private final AuthService authService;

    // ---------------- REGISTER ----------------

    @PostMapping("/register")
    public AuthResponse register(
            @RequestBody RegisterRequest request
    ) {

        return authService.register(request);

    }

    // ---------------- LOGIN ----------------

    @PostMapping("/login")
    public AuthResponse login(
            @RequestBody LoginRequest request
    ) {

        return authService.login(request);

    }

}