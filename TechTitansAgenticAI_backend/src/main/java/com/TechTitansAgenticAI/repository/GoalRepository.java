package com.TechTitansAgenticAI.repository;

import com.TechTitansAgenticAI.entity.Goal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GoalRepository
        extends JpaRepository<Goal,Integer> {
}