import com.TechTitansAgenticAI.dto.*;
import com.TechTitansAgenticAI.entity.Goal;
import com.TechTitansAgenticAI.entity.Scheme;
import com.TechTitansAgenticAI.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

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



        String riskResult=

                wealthReport.getFinancialStatus();



        String futureMap =
                futureMapService.generatePlan(user, goal);



        List<Scheme> schemes=

                schemeNavigatorService.getSchemes(user, goal);



        return new AnalysisResponse(

                wealthReport,

                riskResult,

                futureMap,

                schemes);

    }

}