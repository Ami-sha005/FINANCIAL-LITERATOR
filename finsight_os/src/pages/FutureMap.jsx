import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import GoalForm from "../components/GoalForm";
import GoalSummary from "../components/GoalSummary";
import GoalProjectionChart from "../components/GoalProjectionChart";
import GoalTimeline from "../components/GoalTimeline";
import GoalInsights from "../components/GoalInsights";
import GoalPortfolio from "../components/GoalPortfolio";
import GoalPriorityRanking from "../components/GoalPriorityRanking";
import GoalConflictDetector from "../components/GoalConflictDetector";
import AIPlannerPanel from "../components/AIPlannerPanel";
import axios from "axios";
function FutureMap() {

  const [aiPlan,setAiPlan] = useState("");

  const [name, setName] = useState("");

  const [age, setAge] = useState("");

  const [goalName, setGoalName] =
    useState("");

  const [targetAmount, setTargetAmount] =
    useState("");

  const [years, setYears] =
    useState("");

  const [currentSavings, setCurrentSavings] =
    useState("");

  const [result, setResult] =
    useState(null);

  const calculateGoal = async () => {

    const inflationRate = 0.06;

    const adjustedGoal =
      Number(targetAmount) *
      Math.pow(
        1 + inflationRate,
        Number(years)
      );

    const remainingAmount =
      adjustedGoal -
      Number(currentSavings);

    const monthlySaving =
      remainingAmount /
      (Number(years) * 12);

    let probability = 0;

    if (monthlySaving <= 5000) {
      probability = 95;
    }
    else if (monthlySaving <= 15000) {
      probability = 80;
    }
    else {
      probability = 65;
    }

    setResult({
      goalName,
      adjustedGoal:
        adjustedGoal.toFixed(0),

      monthlySaving:
        monthlySaving.toFixed(0),

      probability,
    });

    generateAIPlan();
  };

  const generateAIPlan = async () => {

  const payload = {

    user : {
    name,
    age : Number(age),
    savings : Number(currentSavings)
  },

    goal : {
      goalName,
      targetAmount : Number(targetAmount),
      targetYears : Number(years)
    }
  };

  try{

    const response = await axios.post(

      `${import.meta.env.VITE_API_BASE_URL}/futuremap/generate`,

      payload

    );

    setAiPlan(response.data);

  }
  catch(error){

    console.log(error);

    setAiPlan(
      "AI Service temporarily unavailable."
    );
  }
};
  return (
    <MainLayout>

      <h1 className="text-3xl font-bold text-white mb-8">
        FutureMap
      </h1>

      <GoalForm
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
        goalName={goalName}
        setGoalName={setGoalName}
        targetAmount={targetAmount}
        setTargetAmount={setTargetAmount}
        years={years}
        setYears={setYears}
        currentSavings={currentSavings}
        setCurrentSavings={setCurrentSavings}
        calculateGoal={calculateGoal}
      />

      {result && (

  <div className="mt-8 space-y-8">

    <GoalSummary
      result={result}
    />

    <GoalProjectionChart
      targetAmount={
        Number(targetAmount)
      }
      years={
        Number(years)
      }
    />

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

      <GoalTimeline
        years={
          Number(years)
        }
      />

      <GoalInsights
        probability={
          result.probability
        }
      />

      <GoalPortfolio />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          <GoalPriorityRanking />

          <GoalConflictDetector />

        </div>

        <div className="mt-8">

          <AIPlannerPanel 
              plan={aiPlan}
          />

        </div>
    </div>

  </div>

)}

    </MainLayout>
  );
}

export default FutureMap;