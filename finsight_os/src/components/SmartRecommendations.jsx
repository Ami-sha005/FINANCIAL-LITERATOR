function SmartRecommendations({
  recommendations
}) {

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white">

      <h2 className="text-xl font-bold mb-5">
        AI Action Center
      </h2>

      <ul className="space-y-3">

        {recommendations.map(
          (item,index)=>(
            <li key={index}>
              • {item}
            </li>
          )
        )}

      </ul>

    </div>
  );
}

export default SmartRecommendations;