function EmergencyFundCard({
  monthlyExpense,
  savings,
}) {

  const requiredFund =
    monthlyExpense * 6;

  const gap =
    requiredFund - savings;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-white">

      <h2 className="text-xl font-bold mb-4">
        Emergency Fund Analyzer
      </h2>

      <p>
        Recommended Fund:
        ₹{requiredFund}
      </p>

      <p className="mt-2">
        Current Savings:
        ₹{savings}
      </p>

      <p className="mt-2">

        {gap <= 0
          ? "✅ Emergency Fund Ready"
          : `⚠ Need ₹${gap} more`
        }

      </p>

    </div>
  );
}

export default EmergencyFundCard;