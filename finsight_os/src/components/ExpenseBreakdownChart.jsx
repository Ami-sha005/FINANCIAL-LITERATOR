import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#2563eb",
  "#16a34a",
  "#dc2626",
  "#ca8a04",
  "#9333ea",
];

function ExpenseBreakdownChart({
  rent,
  food,
  transport,
  education,
  others,
}) {

  const data = [
    { name: "Rent", value: rent },
    { name: "Food", value: food },
    { name: "Transport", value: transport },
    { name: "Education", value: education },
    { name: "Others", value: others },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 h-[350px]">

      <h2 className="text-xl text-white font-bold mb-4">
        Expense Breakdown
      </h2>

      <ResponsiveContainer width="100%" height="90%">

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
          >

            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}

export default ExpenseBreakdownChart;