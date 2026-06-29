function CashFlowRisk({
  income,
  expenses,
}) {

  const ratio =
    expenses / income;

  let status = "";
  let color = "";

  if (ratio < 0.6) {
    status = "Healthy";
    color = "text-green-500";
  }
  else if (ratio < 0.85) {
    status = "Moderate";
    color = "text-yellow-500";
  }
  else {
    status = "High Risk";
    color = "text-red-500";
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-white">

      <h2 className="text-xl font-bold mb-4">
        Cash Flow Risk
      </h2>

      <h3 className={`text-3xl font-bold ${color}`}>
        {status}
      </h3>

      <p className="mt-2 text-gray-400">
        Based on income-expense ratio.
      </p>

    </div>
  );
}

export default CashFlowRisk;