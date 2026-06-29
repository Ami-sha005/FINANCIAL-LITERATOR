function AIExplanationPanel({ report }) {

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white">

      <h2 className="text-xl font-bold mb-5">
        AI Eligibility Analysis
      </h2>

      <pre className="text-gray-300 whitespace-pre-wrap">
        {report}
      </pre>

    </div>

  );

}

export default AIExplanationPanel;