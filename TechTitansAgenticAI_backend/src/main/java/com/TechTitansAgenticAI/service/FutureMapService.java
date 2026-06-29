package com.TechTitansAgenticAI.service;

import com.TechTitansAgenticAI.entity.Goal;
import com.TechTitansAgenticAI.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FutureMapService {

    private final AIService aiService;

    public String generatePlan(User user, Goal goal) {

        String prompt = """
                You are an expert Financial Planning Consultant.

                Analyze the user's financial profile and create a personalized financial roadmap.

                USER PROFILE

                Name: %s
                Age: %d
                Occupation: %s

                Current Savings: ₹%.2f
                Monthly Income: ₹%.2f
                Monthly Expenses: ₹%.2f

                GOAL DETAILS

                Goal: %s
                Target Amount: ₹%.2f
                Time Horizon: %d years

                Generate a professional report using these sections only:

                ## Goal Summary

                ## Risk Level

                ## Monthly Savings Required

                ## Step-by-Step Roadmap
                (Give 5 practical steps.)

                ## Recommended Investment Strategy

                ## Final Advice

                Keep the response practical, realistic and concise.
                """
                .formatted(
                        user.getName(),
                        user.getAge(),
                        user.getOccupation(),
                        user.getSavings(),
                        user.getMonthlyIncome(),
                        user.getMonthlyExpenses(),
                        goal.getGoalName(),
                        goal.getTargetAmount(),
                        goal.getTargetYears()
                );

        try {

            return aiService.generateResponse(prompt);

        } catch (Exception e) {

            double requiredMonthly =
                    Math.max(
                            0,
                            (goal.getTargetAmount() - user.getSavings())
                                    / (goal.getTargetYears() * 12.0)
                    );

            return """
                    # FUTURE MAP REPORT

                    ## Goal Summary

                    Goal : %s

                    Target Amount : ₹%.2f

                    Time Horizon : %d years

                    ## Risk Level

                    Moderate

                    ## Monthly Savings Required

                    ₹%.2f

                    ## Step-by-Step Roadmap

                    • Build an emergency fund.
                    • Save consistently every month.
                    • Start SIP investments.
                    • Review progress every 6 months.
                    • Increase investments whenever income increases.

                    ## Recommended Investment Strategy

                    • Equity Mutual Funds
                    • Index Funds
                    • Fixed Income for stability

                    ## Final Advice

                    Stay disciplined and avoid unnecessary spending while regularly reviewing your financial goals.
                    """
                    .formatted(
                            goal.getGoalName(),
                            goal.getTargetAmount(),
                            goal.getTargetYears(),
                            requiredMonthly
                    );

        }

    }

}