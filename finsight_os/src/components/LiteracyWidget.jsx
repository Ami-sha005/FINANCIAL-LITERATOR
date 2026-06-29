function LiteracyWidget() {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 text-white">

      <h2 className="text-xl font-bold mb-5">
        LearnFinance Hub
      </h2>

      <div className="space-y-4">

        <div>
          <p>Financial Literacy Score</p>

          <div className="w-full bg-slate-700 h-3 rounded-full mt-2">

            <div
              className="bg-green-500 h-3 rounded-full"
              style={{ width: "72%" }}
            />

          </div>

        </div>

        <p>🔥 Learning Streak : 12 Days</p>

        <p>🏆 Badges Earned : 8</p>

        <p>📚 Level : Intermediate Investor</p>

      </div>

    </div>
  );
}

export default LiteracyWidget;