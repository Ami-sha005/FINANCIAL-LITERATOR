package com.TechTitansAgenticAI.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthResponse {

    private boolean success;

    private String message;

    private Long userId;

    private String name;

    private String email;

}