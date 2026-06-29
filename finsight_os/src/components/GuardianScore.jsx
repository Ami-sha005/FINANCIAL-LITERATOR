function GuardianScore({ score }) {

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white">

      <h2 className="text-xl font-bold mb-5">
        Guardian Intelligence Score
      </h2>

      <div className="w-40 h-40 mx-auto rounded-full border-[12px] border-cyan-500 flex items-center justify-center">

        <span className="text-4xl font-bold">
          {score}%
        </span>

      </div>

      <p className="mt-4 text-center text-gray-400">
        Overall Financial Security
      </p>

    </div>
  );
}

export default GuardianScore;