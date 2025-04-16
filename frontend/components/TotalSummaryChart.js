import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
  } from "recharts";
  
  export default function TotalSummaryChart({ data, statusBreakdown }) {
    const summaryData = data.map((item) => ({
      name: item.title,
      value: parseFloat(item.value.toString().replace(/[^0-9.-]+/g, "")) || 0,
    }));
  
    const statusData = Object.entries(statusBreakdown || {}).map(([key, value]) => ({
      name: key,
      value,
    }));
  
    const COLORS = ["#a78bfa", "#c084fc", "#f472b6", "#fb7185", "#818cf8", "#d946ef"];
  
    return (
      <>
        {/* Total Summary Pie Chart */}
        <div className="p-5 rounded-2xl border border-gray-800 hover:bg-gray-900 transition-all duration-200 shadow-lg max-h-[80%] overflow-auto scrollbar-hide">
          <h4 className="text-white text-sm font-semibold mb-2">Total Summary</h4>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={summaryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                outerRadius={80}
                dataKey="value"
              >
                {summaryData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: "#1f1f1f", borderColor: "#444" }} itemStyle={{ color: "#fff" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
  
        {/* Status Breakdown Bar Chart */}
        <div className="py-5 px-3 rounded-2xl border border-gray-800 hover:bg-gray-900 transition-all duration-200 shadow-lg max-h-[80%] overflow-auto scrollbar-hide">
          <h4 className="text-white text-sm font-semibold mb-2">Status Breakdown</h4>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={statusData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip contentStyle={{ backgroundColor: "#1f1f1f", borderColor: "#444", color: "#fff" }} />
              <Bar dataKey="value" fill="#a78bfa" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </>
    );
  }
  