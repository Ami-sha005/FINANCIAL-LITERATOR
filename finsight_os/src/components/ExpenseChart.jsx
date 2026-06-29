import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#3B82F6",
  "#10B981",
  "#EF4444",
  "#F59E0B",
  "#8B5CF6",
  "#06B6D4",
  "#EC4899",
];

function ExpenseChart({ expenses = [] }) {

  const totalExpense = expenses.reduce(
    (sum, item) => sum + item.value,
    0
  );

  const highest =
    expenses.length > 0
      ? expenses.reduce((a, b) => (a.value > b.value ? a : b))
      : null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-6 text-white">

      {/* Header */}

      <div className="flex justify-between items-center mb-5">

        <div>

          <h2 className="text-2xl font-bold">

            📊 Expense Analytics

          </h2>

          <p className="text-gray-400 text-sm mt-1">

            Monthly spending distribution

          </p>

        </div>

        <div className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-xl text-sm font-semibold">

          This Month

        </div>

      </div>

      {/* Summary */}

      <div className="bg-slate-800 rounded-xl p-4 mb-6 flex justify-between items-center">

        <div>

          <p className="text-gray-400 text-sm">

            Total Expenses

          </p>

          <h2 className="text-3xl font-bold mt-1">

            ₹{totalExpense.toLocaleString()}

          </h2>

        </div>

        <div className="text-green-400 font-semibold">

          Healthy Spending ✔

        </div>

      </div>

      {/* Chart */}

      <div className="bg-slate-800 rounded-xl p-4">

        <ResponsiveContainer width="100%" height={280}>

          <PieChart>

            <Pie
              data={expenses}
              dataKey="value"
              nameKey="name"
              outerRadius={90}
              innerRadius={45}
              paddingAngle={3}
            >

              {expenses.map((entry, index) => (

                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />

              ))}

            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "12px",
                color: "#fff",
              }}
            />

          </PieChart>

        </ResponsiveContainer>

      </div>

      {/* Footer */}

      <div className="mt-5 pt-4 border-t border-slate-700 flex justify-between">

        <span className="text-gray-400">

          Highest Spending

        </span>

        <span className="font-semibold text-white">

          {highest ? `${highest.name} (₹${highest.value})` : "-"}

        </span>

      </div>

    </div>
  );
}

export default ExpenseChart;