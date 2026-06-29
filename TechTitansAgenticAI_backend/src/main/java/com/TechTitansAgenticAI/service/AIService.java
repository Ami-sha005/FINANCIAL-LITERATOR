package com.TechTitansAgenticAI.service;

import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AIService {

    private final ChatClient chatClient;

    /**
     * Generates an AI response from Gemini.
     *
     * @param prompt Prompt sent to Gemini
     * @return AI generated response
     */
    public String generateResponse(String prompt) {

        try {

            return chatClient
                    .prompt(prompt)
                    .call()
                    .content();

        }

        catch (Exception e) {

            throw new RuntimeException(
                    "Unable to generate AI response.",
                    e
            );

        }

    }

}
