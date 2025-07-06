import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useEffect, useState } from "react";
import { getTicketStats } from "../Api/dashboardApi";
import Loader from "./Loader";

const BarChartCard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchTicketStats = async () => {
    try {
      setLoading(true);
      const response = await getTicketStats();
      setData(response.data);
    } catch (err) {
      console.error("Error fetching ticket stats:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTicketStats();
  }, []);

  return (
    <div className="w-full bg-white rounded-xl shadow-md p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-700 text-center sm:text-left">
        Tickets by Status
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
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="status" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default BarChartCard;
