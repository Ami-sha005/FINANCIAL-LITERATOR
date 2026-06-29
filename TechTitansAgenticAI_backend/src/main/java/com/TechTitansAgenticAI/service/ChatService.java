package com.TechTitansAgenticAI.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChatService {

    private final AIService aiService;

    public String chat(String message) {

        String prompt = """
You are FINSIGHT OS AI Financial Guardian.

You are an expert in:

• Personal Finance
• Budgeting
• Saving
• Investing
• SIP
• Mutual Funds
• Insurance
• Government Schemes
• Tax Saving
• Loans
• Credit Score
• Fraud Detection

Answer professionally.

User Question:

%s
"""
        .formatted(message);

        try {

            return aiService.generateResponse(prompt);

        }

        catch (Exception e) {

            return "Sorry, AI service is currently unavailable.";

        }

    }

}