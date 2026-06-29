function EligibilityScore({ score }) {

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white">

      <h2 className="text-xl font-bold mb-4">
        Eligibility Score
      </h2>

      <div className="w-32 h-32 mx-auto rounded-full border-[10px] border-green-500 flex items-center justify-center">

        <span className="text-3xl font-bold">
          {score ?? 0}%
        </span>

      </div>

      <p className="text-center mt-4 text-gray-400">
        Scheme Match Confidence
      </p>

    </div>
  );
}

export default EligibilityScore;