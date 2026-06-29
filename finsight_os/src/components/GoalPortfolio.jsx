function GoalPortfolio() {

  const goals = [
    {
      name: "Higher Education",
      target: "₹10 Lakh",
      priority: "High",
    },
    {
      name: "House Purchase",
      target: "₹50 Lakh",
      priority: "Medium",
    },
    {
      name: "Retirement",
      target: "₹1 Crore",
      priority: "Low",
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-xl text-white font-bold mb-5">
        Goal Portfolio
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        {goals.map((goal, index) => (

          <div
            key={index}
            className="bg-slate-800 rounded-xl p-4 text-white"
          >

            <h3 className="font-bold">
              {goal.name}
            </h3>

            <p className="mt-2">
              {goal.target}
            </p>

            <p className="mt-2 text-blue-400">
              {goal.priority}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default GoalPortfolio;