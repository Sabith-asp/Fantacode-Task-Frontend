import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useEffect, useState } from "react";
import { getSaleStats } from "../Api/dashboardApi";
import Loader from "./Loader";

const COLORS = ["#6366F1", "#22C55E", "#F59E0B", "#EF4444"];

const PieChartCard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchCategorySales = async () => {
    try {
      const response = await getSaleStats();

      const transformed = response.data.map((item: any) => ({
        name: item.category,
        value: item.value,
      }));

      setData(transformed);
    } catch (err) {
      console.error("Error fetching sales data:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategorySales();
  }, []);

  return (
    <div className="w-full bg-white rounded-xl shadow-md p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-700 text-center sm:text-left">
        Sales by Category
      </h2>

      <div className="w-full h-[250px] sm:h-[300px] flex items-center justify-center">
        {loading ? (
          <Loader />
        ) : error ? (
          <div className="text-center text-red-500">
            Error loading chart data
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                dataKey="value"
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {data.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default PieChartCard;
