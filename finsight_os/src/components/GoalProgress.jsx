function GoalProgress({ goal }) {
  return (
    <div className="mb-6">

      <div className="flex justify-between text-white mb-2">

        <span>{goal.name}</span>

        <span>{goal.progress}%</span>

      </div>

      <div className="w-full bg-slate-700 rounded-full h-3">

        <div
          className="bg-blue-500 h-3 rounded-full"
          style={{
            width: `${goal.progress}%`,
          }}
        />

      </div>

    </div>
  );
}

export default GoalProgress;