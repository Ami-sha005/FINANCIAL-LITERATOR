function GoalInsights({
  probability,
}) {

  let insights = [];

  if (probability >= 90) {

    insights = [
      "Goal is highly achievable.",
      "Increase SIP for faster completion.",
      "Maintain emergency reserves.",
    ];

  }
  else if (probability >= 75) {

    insights = [
      "Goal is achievable with discipline.",
      "Track monthly investments.",
      "Review progress quarterly.",
    ];

  }
  else {

    insights = [
      "Goal is currently difficult.",
      "Increase income sources.",
      "Extend timeline if needed.",
    ];

  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white">

      <h2 className="text-xl font-bold mb-5">
        AI Goal Insights
      </h2>

      <ul className="space-y-3">

        {insights.map(
          (item, index) => (
            <li key={index}>
              • {item}
            </li>
          )
        )}

      </ul>

    </div>
  );
}

export default GoalInsights;