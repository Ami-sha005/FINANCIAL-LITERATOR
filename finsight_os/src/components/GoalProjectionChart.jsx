import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function GoalProjectionChart({
  targetAmount,
  years,
}) {

  const chartData = [];

  for (let i = 0; i <= years; i++) {

    chartData.push({
      year: i,
      amount:
        (targetAmount / years) * i,
    });

  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-[400px]">

      <h2 className="text-xl text-white font-bold mb-5">
        Goal Growth Projection
      </h2>

      <ResponsiveContainer width="100%" height="85%">

        <LineChart data={chartData}>

          <XAxis dataKey="year" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="amount"
            stroke="#2563eb"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default GoalProjectionChart;