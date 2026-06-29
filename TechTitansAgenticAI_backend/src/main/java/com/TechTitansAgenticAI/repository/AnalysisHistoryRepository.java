package com.TechTitansAgenticAI.repository;

import com.TechTitansAgenticAI.entity.AnalysisHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnalysisHistoryRepository

        extends JpaRepository<AnalysisHistory,Integer> {

}