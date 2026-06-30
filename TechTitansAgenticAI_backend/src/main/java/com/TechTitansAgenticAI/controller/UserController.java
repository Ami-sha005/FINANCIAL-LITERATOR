package com.TechTitansAgenticAI.controller;

import com.TechTitansAgenticAI.entity.User;
import com.TechTitansAgenticAI.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor

public class UserController {

    private final UserRepository userRepository;

    @GetMapping("/profile/{id}")
    public User profile(
            @PathVariable Long id
    ) {

        return userRepository
                .findById(id)
                .orElseThrow();

    }

}