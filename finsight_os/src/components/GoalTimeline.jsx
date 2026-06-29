function GoalTimeline({ years }) {

  const milestones = [];

  for (let i = 1; i <= years; i++) {

    milestones.push(
      `Year ${i} Milestone`
    );

  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white">

      <h2 className="text-xl font-bold mb-5">
        Goal Roadmap
      </h2>

      <div className="space-y-4">

        {milestones.map(
          (item, index) => (

            <div
              key={index}
              className="flex items-center gap-4"
            >
              <div className="w-4 h-4 rounded-full bg-blue-500" />

              <p>{item}</p>

            </div>

          )
        )}

      </div>

    </div>
  );
}

export default GoalTimeline;