package com.TechTitansAgenticAI.service;

import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AiAdvisorService {

    private final ChatClient chatClient;

    public String generateRoadmap(
            String goal,
            double savings,
            int years) {

        String prompt =

                "User goal : " + goal +
                        "\nCurrent Savings : " + savings +
                        "\nTarget Years : " + years +

                        "\nGive:" +

                        "\n1. Risk Level" +

                        "\n2. Step by step roadmap" +

                        "\n3. Financial Advice" +

                        "\nUse proper headings and bullet points.";

        return chatClient
                .prompt(prompt)
                .call()
                .content();
    }

}