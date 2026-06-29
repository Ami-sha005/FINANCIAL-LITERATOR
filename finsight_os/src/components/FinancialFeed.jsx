function FinancialFeed() {

  const feed = [

    "Emergency fund below recommended level",

    "New education scholarship available",

    "Goal achievement probability increased",

    "Spending on food increased by 12%",
  ];

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white">

      <h2 className="text-xl font-bold mb-5">
        Financial Intelligence Feed
      </h2>

      <div className="space-y-3">

        {feed.map((item,index)=>(

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

export default FinancialFeed;