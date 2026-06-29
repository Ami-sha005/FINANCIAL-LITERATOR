import MainLayout from "../layouts/MainLayout";
import axios from "axios";
import { useState } from "react";
import GuardianScore from "../components/GuardianScore";
import RiskAlerts from "../components/RiskAlerts";
import SmartRecommendations from "../components/SmartRecommendations";
import FutureRiskPrediction from "../components/FutureRiskPrediction";
import GoalRiskAnalyzer from "../components/GoalRiskAnalyzer";

function AIFinancialGuardian() {
const [guardianData, setGuardianData] = useState("");
const [goalRiskData, setGoalRiskData] = useState(null);
const [name, setName] = useState("");
const [age, setAge] = useState("");
const [income, setIncome] = useState("");
const [expenses, setExpenses] = useState("");
const [savings, setSavings] = useState("");

const incomeValue = Number(income);
const expensesValue = Number(expenses);
const savingsValue = Number(savings);
const monthlySavings = savingsValue;

const analyzeWithAI = async () => {

  const payload = {

    name,
    age: Number(age),
    income: incomeValue,
    expenses: expensesValue,
    savings: savingsValue
  };

  try {

    const response = await axios.post(

      "http://localhost:8080/guardian/analyze",

      payload
    );

    setGuardianData(response.data);
    analyzeGoalRisk();
    const goalResponse = await axios.post(

  "http://localhost:8080/goalrisk/analyze",

  {
    goalName: "Dream Home",
    targetAmount: 10000000,
    years: 15,
    monthlySavings: savingsValue
  }

);

setGoalRiskData(goalResponse.data);

  }
  catch(error){

    console.log(error);

    setGuardianData({guardianScore: 0,
  riskLevel: "Unavailable",
  recommendations: "Service unavailable",
  report: "AI service temporarily unavailable."}
    );
  }
};


  return (

    <MainLayout>

      <h1 className="text-3xl font-bold text-white mb-8">
        AI Financial Guardian
      </h1>

      <div className="bg-slate-900 p-6 rounded-xl mb-8">

  <h2 className="text-white text-xl font-bold mb-4">
    Enter Financial Details
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <input
  type="text"
  placeholder="Name"
  value={name}
  onChange={(e)=>setName(e.target.value)}
  className="p-3 rounded-xl bg-slate-800 text-white"
/>

<input
  type="number"
  placeholder="Age"
  value={age}
  onChange={(e)=>setAge(e.target.value)}
  className="p-3 rounded-xl bg-slate-800 text-white"
/>

    <input
      type="number"
      placeholder="Monthly Income"
      value={income}
      onChange={(e) => setIncome(e.target.value)}
      className="p-3 rounded-xl bg-slate-800 text-white"
    />

    <input
      type="number"
      placeholder="Monthly Expenses"
      value={expenses}
      onChange={(e) => setExpenses(e.target.value)}
      className="p-3 rounded-xl bg-slate-800 text-white"
    />

    <input
      type="number"
      placeholder="Current Savings"
      value={savings}
      onChange={(e) => setSavings(e.target.value)}
      className="p-3 rounded-xl bg-slate-800 text-white"
    />

    <button
  onClick={analyzeWithAI}
  className="
    mt-4
    bg-blue-600
    hover:bg-blue-700
    px-6
    py-3
    rounded-xl
    text-white
  "
>
  Analyze With AI Guardian
</button>

  </div>

</div>

      <div className="mt-8">
s
      <FutureRiskPrediction
        income={income}
        expenses={expenses}
      />

       </div>

       <div className="mt-8">

         {goalRiskData && (

  <GoalRiskAnalyzer

    
          goalData={goalRiskData}
    

   

  />

)}

       </div>

       {guardianData && (

  <div className="mt-8 space-y-6">

    <div className="bg-slate-900 p-6 rounded-xl">

      <h2 className="text-white text-xl font-bold mb-4">
        Guardian Score
      </h2>

      <p className="text-4xl text-green-400 font-bold">
        {guardianData.guardianScore}
      </p>

    </div>

    <div className="bg-slate-900 p-6 rounded-xl">

      <h2 className="text-white text-xl font-bold mb-4">
        Risk Level
      </h2>

      <p className="text-yellow-400 text-lg">
        {guardianData.riskLevel}
      </p>

    </div>

    <div className="bg-slate-900 p-6 rounded-xl">

      <h2 className="text-white text-xl font-bold mb-4">
        Recommendations
      </h2>

      <p className="text-gray-300">
        {guardianData.recommendations}
      </p>

    </div>

    <div className="bg-slate-900 p-6 rounded-xl">

      <h2 className="text-white text-xl font-bold mb-4">
        Detailed AI Report
      </h2>

      <pre className="text-gray-300 whitespace-pre-wrap">
        {guardianData.report}
      </pre>

    </div>

  </div>

)}

    

    </MainLayout>

  );
}

export default AIFinancialGuardian;