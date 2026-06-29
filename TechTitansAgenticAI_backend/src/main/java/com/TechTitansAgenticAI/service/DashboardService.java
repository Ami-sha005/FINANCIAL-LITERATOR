package com.TechTitansAgenticAI.service;

import com.TechTitansAgenticAI.dto.DashboardExpense;
import com.TechTitansAgenticAI.dto.DashboardGoal;
import com.TechTitansAgenticAI.dto.DashboardResponse;
import com.TechTitansAgenticAI.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DashboardService {

    public DashboardResponse getDashboard(User user) {

        /*
         * -------------------------------
         * Goals
         * -------------------------------
         */

        List<DashboardGoal> goals = List.of(

                new DashboardGoal(
                        "Education Fund",
                        80
                ),

                new DashboardGoal(
                        "Retirement",
                        45
                ),

                new DashboardGoal(
                        "Emergency Fund",
                        65
                )

        );

        /*
         * -------------------------------
         * Expenses
         * -------------------------------
         */

        List<DashboardExpense> expenses = List.of(

                new DashboardExpense(
                        "Food",
                        12000
                ),

                new DashboardExpense(
                        "Rent",
                        15000
                ),

                new DashboardExpense(
                        "Education",
                        5000
                ),

                new DashboardExpense(
                        "Transport",
                        3000
                ),

                new DashboardExpense(
                        "Entertainment",
                        4000
                )

        );

        /*
         * -------------------------------
         * Dashboard (NO AI)
         * -------------------------------
         */

        return new DashboardResponse(

                82,                         // financial score

                "Low",                     // debt risk

                List.of(),                 // insights loaded separately

                "",                        // recommendation loaded separately

                user.getSavings(),

                user.getMonthlyIncome()
                        - user.getMonthlyExpenses(),

                2,

                user.getAge(),

                user.getOccupation(),

                "Moderate",

                "India",

                goals,

                expenses

        );

    }

}