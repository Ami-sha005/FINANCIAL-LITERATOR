package com.TechTitansAgenticAI.controller;

import com.TechTitansAgenticAI.dto.ChatRequest;
import com.TechTitansAgenticAI.dto.ChatResponse;
import com.TechTitansAgenticAI.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/chat")
@RequiredArgsConstructor

public class ChatController {

    private final ChatService chatService;

    @PostMapping
    public ChatResponse chat(
            @RequestBody ChatRequest request
    ) {

        String reply = chatService.chat(request.getMessage());

        return new ChatResponse(reply);

    }

}