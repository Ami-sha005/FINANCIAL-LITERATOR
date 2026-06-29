function GoalSummary({ result }) {

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white">

      <h2 className="text-2xl font-bold mb-5">
        Goal Analysis
      </h2>

      <div className="space-y-4">

        <p>
          Goal :
          <span className="font-bold ml-2">
            {result.goalName}
          </span>
        </p>

        <p>
          Inflation Adjusted Goal :
          <span className="font-bold ml-2">
            ₹{result.adjustedGoal}
          </span>
        </p>

        <p>
          Monthly Savings Required :
          <span className="font-bold ml-2">
            ₹{result.monthlySaving}
          </span>
        </p>

        <p>
          Goal Achievement Probability :
          <span className="font-bold ml-2">
            {result.probability}%
          </span>
        </p>

      </div>

    </div>
  );
}

export default GoalSummary;