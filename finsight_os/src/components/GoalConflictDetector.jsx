function GoalConflictDetector() {

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white">

      <h2 className="text-xl font-bold mb-5">
        Goal Conflict Detector
      </h2>

      <div className="space-y-4">

        <div className="bg-red-500/20 border border-red-500/20 p-4 rounded-xl">

          ⚠ House Purchase and Education Goal
          compete for the same savings pool.

        </div>

        <div className="bg-blue-500/20 border border-blue-500/20 p-4 rounded-xl">

          Recommendation:
          Delay House Goal by 12 months.

        </div>

      </div>

    </div>
  );
}

export default GoalConflictDetector;