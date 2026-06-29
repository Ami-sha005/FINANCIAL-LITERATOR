package com.TechTitansAgenticAI.service;

import com.TechTitansAgenticAI.dto.GoalRiskRequest;
import com.TechTitansAgenticAI.dto.GoalRiskResponse;
import org.springframework.stereotype.Service;

@Service
public class GoalRiskService {

    public GoalRiskResponse analyze(
            GoalRiskRequest request
    ) {

        double requiredMonthly =
                request.getTargetAmount()
                        /
                        (request.getYears() * 12.0);

        boolean atRisk =
                request.getMonthlySavings()
                        <
                        requiredMonthly;

        int delay = 0;

        if(atRisk && request.getMonthlySavings() > 0){

            delay =
                    (int)Math.ceil(
                            requiredMonthly
                                    /
                                    request.getMonthlySavings()
                    );
        }

        return new GoalRiskResponse(

                request.getGoalName(),

                requiredMonthly,

                atRisk
                        ? "Goal At Risk"
                        : "On Track",

                delay
        );
    }
}