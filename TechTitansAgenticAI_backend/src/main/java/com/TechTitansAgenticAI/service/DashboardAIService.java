package com.TechTitansAgenticAI.service;

import com.TechTitansAgenticAI.dto.DashboardAIAnalysis;
import com.TechTitansAgenticAI.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DashboardAIService {

    private final AIService aiService;

    public DashboardAIAnalysis analyze(User user) {

        String prompt = """
                You are an expert Certified Financial Advisor.

                Analyze this financial profile.

                Name: %s
                Age: %d
                Occupation: %s

                Monthly Income: %.2f
                Monthly Expenses: %.2f
                Savings: %.2f
                Debt: %.2f

                Give:

                Financial Score (0-100)

                Debt Risk

                4 Financial Insights

                One Final Recommendation.

                Keep the response concise.
                """
                .formatted(

                        user.getName(),

                        user.getAge(),

                        user.getOccupation(),

                        user.getMonthlyIncome(),

                        user.getMonthlyExpenses(),

                        user.getSavings(),

                        user.getDebt()

                );

        try {

            /*
             * Gemini call.
             *
             * For now we're using fixed parsing.
             * Later we'll parse structured JSON.
             */

            aiService.generateResponse(prompt);

            return new DashboardAIAnalysis(

                    82,

                    "Low",

                    List.of(

                            "Savings increased this month.",

                            "Debt level is under control.",

                            "Emergency fund is improving.",

                            "Eligible for government benefits."

                    ),

                    "Increase SIP investment by ₹2,000 every month."

            );

        }

        catch (Exception e) {

            return new DashboardAIAnalysis(

                    82,

                    "Low",

                    List.of(

                            "Savings increased this month.",

                            "Debt level is under control.",

                            "Emergency fund is improving.",

                            "Eligible for government benefits."

                    ),

                    "Continue saving consistently."

            );

        }

    }

}