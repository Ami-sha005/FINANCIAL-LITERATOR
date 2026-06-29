package com.TechTitansAgenticAI.service;

import com.TechTitansAgenticAI.dto.AIGuardianRequest;
import com.TechTitansAgenticAI.dto.AIGuardianResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AIGuardianService {

    private final ChatClient chatClient;

    public AIGuardianResponse analyze(AIGuardianRequest request) {

        String prompt = """
        You are an expert AI Financial Guardian.

        Analyze the following user:

        Name: %s
        Age: %d
        Monthly Income: %.2f
        Monthly Expenses: %.2f
        Savings: %.2f

        Provide:

        1. Financial Risk Score (0-100)
        2. Spending Risk Analysis
        3. Emergency Fund Status
        4. Savings Health
        5. Fraud Prevention Tips
        6. Personalized Recommendations

        Use headings and bullet points.
        """
        .formatted(
                request.getName(),
                request.getAge(),
                request.getIncome(),
                request.getExpenses(),
                request.getSavings()
        );

        String report = chatClient
                .prompt(prompt)
                .call()
                .content();

        int score = 75;

        String riskLevel = "Moderate";

        String recommendations =
                "Increase savings and reduce unnecessary spending.";

        return new AIGuardianResponse(
                score,
                riskLevel,
                recommendations,
                report
        );
    }
}