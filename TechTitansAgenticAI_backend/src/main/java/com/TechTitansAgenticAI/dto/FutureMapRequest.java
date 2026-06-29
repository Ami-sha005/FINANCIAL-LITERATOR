package com.TechTitansAgenticAI.dto;

import com.TechTitansAgenticAI.entity.Goal;
import com.TechTitansAgenticAI.entity.User;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FutureMapRequest {

    private User user;

    private Goal goal;
}