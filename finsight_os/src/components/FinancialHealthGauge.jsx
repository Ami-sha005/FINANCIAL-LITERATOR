function FinancialHealthGauge({ score }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center text-white">

      <h2 className="text-xl font-bold mb-5">
        Financial Health Score
      </h2>

      <div
        className="
        w-40
        h-40
        rounded-full
        border-[12px]
        border-blue-500
        flex
        items-center
        justify-center
        mx-auto
        "
      >

      <div>
          <div className="text-4xl font-bold">
            {score}%
          </div>

          <div className="mt-2">
             {score >= 80 && "🟢 Excellent"}

                {score >= 60 &&
                  score < 80 &&
                  "🟡 Stable"}

                {score < 60 &&
                  "🔴 Risky"}
          </div>
      </div>
      </div>

      <p className="mt-4 text-gray-400">
        Overall Financial Stability
      </p>

    </div>
  );
}

export default FinancialHealthGauge;