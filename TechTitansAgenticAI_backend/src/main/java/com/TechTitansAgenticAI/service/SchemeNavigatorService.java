package com.TechTitansAgenticAI.service;

import com.TechTitansAgenticAI.dto.SchemeItem;
import com.TechTitansAgenticAI.dto.SchemeResponse;
import com.TechTitansAgenticAI.entity.Goal;
import com.TechTitansAgenticAI.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SchemeNavigatorService {

    private final AIService aiService;

    public SchemeResponse findSchemes(User user, Goal goal) {

        String prompt = """
                You are an expert in Indian Government Financial Schemes.

                USER PROFILE

                Name: %s
                Age: %d
                Occupation: %s
                Monthly Income: ₹%.2f

                FINANCIAL GOAL

                Goal: %s

                Suggest the 3 BEST Government schemes suitable for this user.

                For each scheme provide:

                • Scheme Name
                • Benefits
                • Eligibility
                • Why it matches the user's profile
                • Official Website

                Keep the answer professional and well formatted.
                """
                .formatted(
                        user.getName(),
                        user.getAge(),
                        user.getOccupation(),
                        user.getMonthlyIncome(),
                        goal.getGoalName()
                );

        try {

            String aiReport = aiService.generateResponse(prompt);

            List<SchemeItem> schemes = List.of(

                    new SchemeItem(

                            "AI Recommended Government Schemes",

                            aiReport,

                            "Personalized",

                            "Generated using AI according to your profile",

                            "https://www.india.gov.in"

                    )

            );

            return new SchemeResponse(

                    90,

                    "₹50,000",

                    "You are eligible for multiple Government schemes.",

                    schemes

            );

        }

        catch (Exception e) {

            List<SchemeItem> fallbackSchemes = List.of(

                    new SchemeItem(

                            "Pradhan Mantri Mudra Yojana (PMMY)",

                            "Collateral-free business loans for small entrepreneurs.",

                            "Indian citizen with eligible business activity.",

                            "Suitable for self-employment and small businesses.",

                            "https://www.mudra.org.in"

                    ),

                    new SchemeItem(

                            "Atal Pension Yojana",

                            "Guaranteed pension after retirement.",

                            "Indian citizens aged 18-40 years.",

                            "Suitable for long-term retirement planning.",

                            "https://www.npscra.nsdl.co.in"

                    ),

                    new SchemeItem(

                            "Pradhan Mantri Jeevan Jyoti Bima Yojana",

                            "Affordable life insurance coverage.",

                            "Savings bank account holder aged 18-50 years.",

                            "Provides financial protection to the family.",

                            "https://jansuraksha.gov.in"

                    )

            );

            return new SchemeResponse(

                    90,

                    "₹50,000",

                    "Some government schemes are recommended based on your profile.",

                    fallbackSchemes

            );

        }

    }

}