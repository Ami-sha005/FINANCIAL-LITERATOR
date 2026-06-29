package com.TechTitansAgenticAI.service;

import com.TechTitansAgenticAI.entity.User;
import org.springframework.stereotype.Service;

@Service
public class RiskSentinelService {

    public String predictRisk(User user){

        double expenseRatio =
                user.getMonthlyExpenses()
                        / user.getMonthlyIncome();

        if(expenseRatio > 0.8){
            return "HIGH RISK";
        }

        return "LOW RISK";
    }
}