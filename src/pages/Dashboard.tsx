import { Navigate } from "react-router-dom";
import BarChartCard from "../components/BarChartCard";
import PieChartCard from "../components/PieChartCard";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" />;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 text-center">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <BarChartCard />
        <PieChartCard />
      </div>
    </div>
  );
};

export default Dashboard;
