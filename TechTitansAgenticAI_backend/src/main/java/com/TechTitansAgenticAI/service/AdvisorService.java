package com.TechTitansAgenticAI.service;

import com.TechTitansAgenticAI.entity.User;
import com.TechTitansAgenticAI.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AdvisorService {

    private final UserRepository userRepository;
    private final AIService aiService;

    public String askQuestion(Long userId, String question) {

        User user = userRepository.findById(userId)
                .orElseThrow(() ->
                        new RuntimeException("User not found."));

        String prompt = """
                You are FINSIGHT OS AI Financial Advisor.

                User Profile

                Name : %s
                Age : %d
                Occupation : %s

                Monthly Income : ₹ %.2f
                Monthly Expenses : ₹ %.2f
                Savings : ₹ %.2f
                Debt : ₹ %.2f

                User Question:

                %s

                Instructions:

                - Give practical financial advice.
                - Keep the answer under 200 words.
                - Use bullet points where appropriate.
                - Be specific to the user's financial profile.
                - Do not give legal or tax advice.
                - End with one actionable recommendation.
                """
                .formatted(
                        user.getName(),
                        user.getAge(),
                        user.getOccupation(),
                        user.getMonthlyIncome(),
                        user.getMonthlyExpenses(),
                        user.getSavings(),
                        user.getDebt(),
                        question
                );

        try {

            return aiService.generateResponse(prompt);

        } catch (Exception e) {

            return """
                    AI Financial Advisor is temporarily unavailable.

                    General Recommendation:

                    • Continue saving at least 20%% of your monthly income.
                    • Build an emergency fund covering 6 months of expenses.
                    • Avoid taking unnecessary debt.
                    • Invest regularly through diversified SIPs or index funds.
                    • Review your financial goals every month.
                    """;
        }
    }
}