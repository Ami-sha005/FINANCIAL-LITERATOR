import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function SavingsChart({
  income,
  expenses,
  savings,
}) {

  const data = [
    {
      name: "Financial Overview",
      Income: income,
      Expenses: expenses,
      Savings: savings,
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 h-[350px]">

      <h2 className="text-xl text-white font-bold mb-4">
        Savings Analysis
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="Income" fill="#2563eb" />

          <Bar dataKey="Expenses" fill="#dc2626" />

          <Bar dataKey="Savings" fill="#16a34a" />

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}

export default SavingsChart;