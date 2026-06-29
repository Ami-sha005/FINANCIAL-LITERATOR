function AIPlannerPanel({plan}){

  return(

    <div className="bg-slate-900 p-6 rounded-xl">

      <h2 className="text-xl font-bold text-white mb-4">

        AI Planner

      </h2>

      <pre className="text-gray-300 whitespace-pre-wrap">

        {plan}

      </pre>

    </div>

  );
}

export default AIPlannerPanel;