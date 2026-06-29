function RiskAlerts({ alerts }) {

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white">

      <h2 className="text-xl font-bold mb-5">
        Risk Detection Center
      </h2>

      <div className="space-y-4">

        {alerts.map((alert,index)=>(

          <div
            key={index}
            className="bg-red-500/20 border border-red-500/20 p-4 rounded-xl"
          >
            ⚠ {alert}
          </div>

        ))}

      </div>

    </div>
  );
}

export default RiskAlerts;