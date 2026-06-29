function GoalForm({
  name,
  setName,
  age,
  setAge,
  goalName,
  setGoalName,
  targetAmount,
  setTargetAmount,
  years,
  setYears,
  currentSavings,
  setCurrentSavings,
  calculateGoal,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-2xl text-white font-bold mb-6">
        Goal Planning Engine
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        className="p-3 rounded-xl bg-slate-800 text-white"
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) =>
          setAge(e.target.value)
        }
        className="p-3 rounded-xl bg-slate-800 text-white"
      />
        <input
          type="text"
          placeholder="Goal Name"
          value={goalName}
          onChange={(e) =>
            setGoalName(e.target.value)
          }
          className="p-3 rounded-xl bg-slate-800 text-white"
        />

        <input
          type="number"
          placeholder="Target Amount"
          value={targetAmount}
          onChange={(e) =>
            setTargetAmount(e.target.value)
          }
          className="p-3 rounded-xl bg-slate-800 text-white"
        />

        <input
          type="number"
          placeholder="Years"
          value={years}
          onChange={(e) =>
            setYears(e.target.value)
          }
          className="p-3 rounded-xl bg-slate-800 text-white"
        />

        <input
          type="number"
          placeholder="Current Savings"
          value={currentSavings}
          onChange={(e) =>
            setCurrentSavings(e.target.value)
          }
          className="p-3 rounded-xl bg-slate-800 text-white"
        />

      </div>

      <button
        onClick={calculateGoal}
        className="
          mt-6
          bg-blue-600
          hover:bg-blue-700
          px-6
          py-3
          rounded-xl
          text-white
        "
      >
        Generate Roadmap
      </button>

    </div>
  );
}

export default GoalForm;