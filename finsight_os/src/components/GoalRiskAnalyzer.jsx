function GoalRiskAnalyzer({ goalData }) {

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white">

      <h2 className="text-xl font-bold mb-5">

        Goal Risk Analyzer

      </h2>

      <div className="bg-slate-800 p-4 rounded-xl">

        <h3 className="font-bold text-lg">

          {goalData.goalName}

        </h3>

        <p>

          Required Monthly:
          ₹{goalData.requiredMonthly.toFixed(0)}

        </p>

        <p
          className={
            goalData.status === "On Track"
            ? "text-green-400"
            : "text-red-400"
          }
        >

          {goalData.status}

        </p>

        {

          goalData.status === "Goal At Risk"

          &&

          (

            <p className="text-yellow-400 mt-2">

              Estimated Delay:
              {goalData.estimatedDelay} Years

            </p>

          )

        }

      </div>

    </div>

  );
}

export default GoalRiskAnalyzer;