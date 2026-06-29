package com.TechTitansAgenticAI.service;

import com.TechTitansAgenticAI.dto.AnalysisResponse;
import com.TechTitansAgenticAI.entity.Goal;
import com.TechTitansAgenticAI.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.TechTitansAgenticAI.dto.SchemeRequest;
import com.TechTitansAgenticAI.dto.SchemeResponse;

@Service
@RequiredArgsConstructor
public class AgentService {

    private final WealthTrackerService wealthTrackerService;

    private final FutureMapService futureMapService;

    private final SchemeNavigatorService schemeNavigatorService;


    public AnalysisResponse analyze(
            User user,
            Goal goal){

        String wealthAnalysis =
                wealthTrackerService.analyze(user);

        String futureMap =
                futureMapService.generatePlan(
                        user,
                        goal);

        SchemeResponse schemeResponse =
        schemeNavigatorService.findSchemes(
                user,
                goal
        );

        String schemes = schemeResponse.getAnalysis();

        return new AnalysisResponse(
                wealthAnalysis,
                futureMap,
                schemes
        );
    }
}