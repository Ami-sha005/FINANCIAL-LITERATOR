package com.TechTitansAgenticAI.service;

import com.TechTitansAgenticAI.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class WealthTrackerService {

    private final AIService aiService;

    public String analyze(User user) {

        String prompt = """
                You are an expert Certified Financial Advisor.

                Analyze the following user's financial profile.

                User Details:

                Name: %s
                Age: %d
                Occupation: %s

                Monthly Income: ₹%.2f
                Monthly Expenses: ₹%.2f
                Current Savings: ₹%.2f
                Current Debt: ₹%.2f

                Generate a professional financial report with the following sections:

                ## Financial Health Score
                Give a score out of 100.

                ## Financial Status
                Explain the user's current financial condition.

                ## Risk Level
                Mention whether Low, Moderate or High.

                ## Savings Advice
                Give 3 practical suggestions.

                ## Investment Suggestions
                Recommend suitable investments according to the user's age and risk profile.

                Keep the response concise, professional and easy to understand.
                """.formatted(
                user.getName(),
                user.getAge(),
                user.getOccupation(),
                user.getMonthlyIncome(),
                user.getMonthlyExpenses(),
                user.getSavings(),
                user.getDebt()
        );

        try {

            return aiService.generateResponse(prompt);

        } catch (Exception e) {

            return """
                    # AI Service Temporarily Unavailable

                    ## Financial Health Score
                    80 / 100

                    ## Financial Status
                    Your finances appear stable based on the available information.

                    ## Risk Level
                    Moderate

                    ## Savings Advice
                    • Save at least 20%% of your monthly income.
                    • Build an emergency fund covering 6 months of expenses.
                    • Reduce unnecessary spending wherever possible.

                    ## Investment Suggestions
                    • Start a monthly SIP in index mutual funds.
                    • Diversify investments instead of relying on a single asset.
                    • Review your financial goals every 6 months.
                    """;

        }

    }

}