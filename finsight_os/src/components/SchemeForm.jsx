function SchemeForm({
  age,
  setAge,
  occupation,
  setOccupation,
  income,
  setIncome,
  checkEligibility,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-2xl text-white font-bold mb-6">
        Government Scheme Finder
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e)=>setAge(e.target.value)}
          className="p-3 rounded-xl bg-slate-800 text-white"
        />

        <input
          type="text"
          placeholder="Occupation"
          value={occupation}
          onChange={(e)=>setOccupation(e.target.value)}
          className="p-3 rounded-xl bg-slate-800 text-white"
        />

        <input
          type="number"
          placeholder="Annual Income"
          value={income}
          onChange={(e)=>setIncome(e.target.value)}
          className="p-3 rounded-xl bg-slate-800 text-white"
        />

      </div>

      <button
        onClick={checkEligibility}
        className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white"
      >
        Find Eligible Schemes
      </button>

    </div>
  );
}

export default SchemeForm;