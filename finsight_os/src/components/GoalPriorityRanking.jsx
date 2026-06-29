function GoalPriorityRanking() {

  const priorities = [
    "1. Higher Education",
    "2. House Purchase",
    "3. Retirement",
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white">

      <h2 className="text-xl font-bold mb-5">
        Goal Priority Engine
      </h2>

      <div className="space-y-3">

        {priorities.map((item, index) => (

          <div
            key={index}
            className="bg-slate-800 p-3 rounded-xl"
          >
            {item}
          </div>

        ))}

      </div>

    </div>
  );
}

export default GoalPriorityRanking;