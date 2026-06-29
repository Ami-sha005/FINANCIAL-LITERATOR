import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import FinancialHealthGauge from "../components/FinancialHealthGauge";
import SavingsChart from "../components/SavingsChart";
import ExpenseBreakdownChart from "../components/ExpenseBreakdownChart";
import EmergencyFundCard from "../components/EmergencyFundCard";
import CashFlowRisk from "../components/CashFlowRisk";

import API from "../api/api";

function WealthTracker() {

  const [salary, setSalary] = useState("");
  const [otherIncome, setOtherIncome] = useState("");

  const [rent, setRent] = useState("");
  const [food, setFood] = useState("");
  const [transport, setTransport] = useState("");
  const [education, setEducation] = useState("");
  const [others, setOthers] = useState("");

  const [result, setResult] = useState(null);

  const calculateHealth = async () => {

    const totalIncome =
      Number(salary) +
      Number(otherIncome);

    const totalExpense =
      Number(rent) +
      Number(food) +
      Number(transport) +
      Number(education) +
      Number(others);

    try {

  const response =
    await API.post(
      "/wealth/analyze",
      {
        name: "Amisha",
        age: 22,
        occupation: "Student",

        monthlyIncome:
          totalIncome,

        monthlyExpenses:
          totalExpense,

        savings:
          totalIncome -
          totalExpense,

        debt: 0,
      }
    );

  console.log(
    response.data
  );

}
catch(error){

  console.log(error);

}
    const savings =
      totalIncome - totalExpense;

    const savingsRate =
      totalIncome > 0
    ? (savings / totalIncome) * 100
    : 0;

    let score = 0;
    let recommendations = [];

    if (savingsRate >= 30) {
      score = 90;
      recommendations = [
        "Increase SIP investments",
        "Maintain emergency fund",
        "Review insurance coverage",
        "Continue current savings rate",
];
    }
    else if (savingsRate >= 20) {
      score = 75;
      recommendations = [
        "Increase SIP investments",
        "Increase emergency fund",
        "Review insurance coverage",
        "Continue current savings rate",
];
    }
    else if (savingsRate >= 10) {
      score = 60;
      recommendations = [
        "Increase SIP investments",
        "Maintain emergency fund",
        "Review insurance coverage",
        "Increase current savings rate",
        "Reduce discretionary spending",
];
    }
    else {
      score = 40;
      recommendations = [
        "Reduce discretionary spending",
        "Avoid unnecessary loans",
        "Build emergency fund",
        "Track monthly expenses",
];
    }

    setResult({
      totalIncome,
      totalExpense,
      savings,
      score,
      recommendations,
    });
  };

  return (
    <MainLayout>

      <h1 className="text-3xl font-bold text-white mb-8">
        WealthTracker
      </h1>

      {/* Input Section */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

        <h2 className="text-xl text-white font-bold mb-5">
          Monthly Income
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <input
            type="number"
            placeholder="Salary"
            value={salary}
            onChange={(e) =>
              setSalary(e.target.value)
            }
            className="p-3 rounded-xl bg-slate-800 text-white"
          />

          <input
            type="number"
            placeholder="Other Income"
            value={otherIncome}
            onChange={(e) =>
              setOtherIncome(e.target.value)
            }
            className="p-3 rounded-xl bg-slate-800 text-white"
          />

        </div>

        <h2 className="text-xl text-white font-bold mt-8 mb-5">
          Monthly Expenses
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <input
            type="number"
            placeholder="Rent"
            value={rent}
            onChange={(e) =>
              setRent(e.target.value)
            }
            className="p-3 rounded-xl bg-slate-800 text-white"
          />

          <input
            type="number"
            placeholder="Food"
            value={food}
            onChange={(e) =>
              setFood(e.target.value)
            }
            className="p-3 rounded-xl bg-slate-800 text-white"
          />

          <input
            type="number"
            placeholder="Transport"
            value={transport}
            onChange={(e) =>
              setTransport(e.target.value)
            }
            className="p-3 rounded-xl bg-slate-800 text-white"
          />

          <input
            type="number"
            placeholder="Education"
            value={education}
            onChange={(e) =>
              setEducation(e.target.value)
            }
            className="p-3 rounded-xl bg-slate-800 text-white"
          />

          <input
            type="number"
            placeholder="Others"
            value={others}
            onChange={(e) =>
              setOthers(e.target.value)
            }
            className="p-3 rounded-xl bg-slate-800 text-white"
          />

        </div>

        <button
          onClick={calculateHealth}
          className="
          mt-6
          bg-blue-600
          hover:bg-blue-700
          px-6
          py-3
          rounded-xl
          text-white
          "
        >
          Calculate Financial Health
        </button>

      </div>

      {/* Result Section */}

      {result && (

        <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white">

          <h2 className="text-2xl font-bold mb-5">
            Financial Analysis
          </h2>

          <div className="space-y-3">

            <p>
              Total Income :
              ₹{result.totalIncome}
            </p>

            <p>
              Total Expense :
              ₹{result.totalExpense}
            </p>

            <p>
              Savings :
              ₹{result.savings}
            </p>

            <p>
              Financial Health Score :
              {result.score}/100
            </p>

          </div>

          <div className="mt-6 bg-blue-600/20 border border-blue-500/20 p-4 rounded-xl">

            <h3 className="font-bold mb-2">
              AI Recommendation
            </h3>

            <ul className="space-y-2">

  {result.recommendations.map(
    (item, index) => (

      <li key={index}>
        • {item}
      </li>

    )
  )}

</ul>

          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

  <FinancialHealthGauge
    score={result.score}
  />

  <SavingsChart
    income={result.totalIncome}
    expenses={result.totalExpense}
    savings={result.savings}
  />

</div>

<div className="mt-8">

  <ExpenseBreakdownChart
    rent={Number(rent)}
    food={Number(food)}
    transport={Number(transport)}
    education={Number(education)}
    others={Number(others)}
  />

  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

  <EmergencyFundCard
    monthlyExpense={result.totalExpense}
    savings={result.savings}
  />

  <CashFlowRisk
    income={result.totalIncome}
    expenses={result.totalExpense}
  />

</div>

</div>

          

        </div>

      )}

    </MainLayout>
  );
}

export default WealthTracker;