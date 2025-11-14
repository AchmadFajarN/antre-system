import SidebarAdmin from "../sidebar/SidebarAdmin";
import { useEffect } from "react";
import { Bell } from "lucide-react";
import CardDashboard from "../ui/CardDashboard";
import SimpleAreaChart from "../chart/AreaChart";
import StraightAnglePieChart from "../chart/PieChart";
import SimpleBarChart from "../chart/BarChart";
import { useNavigate } from "react-router";


const LayoutAdmin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const roleUser = JSON.parse(localStorage.getItem("user"))?.role;
    if (roleUser !== "admin") {
      navigate("/dashboard");
    }
  }, [navigate]);
  const dataSummery = [
    {
      dataKey: "Jumlah pengajuan saat ini",
      value: 20,
    },
    {
      dataKey: "Pengajuan di proses",
      value: 10,
    },
    {
      dataKey: "Pengajuan di tolak",
      value: 5,
    },
    {
      dataKey: "Pengajuan sukses",
      value: 5,
    },
  ];
  return (
    <main className="max-h-screen text-gray-800 h-screen overflow-hidden bg-gray-200 flex">
      <SidebarAdmin />
      <div className="content-stretch flex-4 pt-4 px-2 overflow-y-scroll mb-8">
        <div className="w-full bg-white shadow-md p-4 rounded-md flex justify-between items-center">
          <h1 className="font-semibold">Admin Dashboard</h1>
          <Bell />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          {dataSummery.map((data) => {
            return <CardDashboard title={data.dataKey} value={data.value} />;
          })}
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white shadow-md rounded-md px-4 pt-2">
            <h2 className="mb-4 font-semibold">Distribusi Pengajuan</h2>
            <SimpleAreaChart />
          </div>
          <div className="bg-white shadow-md rounded-md px-4 pt-2">
            <h2 className="mb-4 font-semibold">Distribusi Status Pengajuan</h2>
            <StraightAnglePieChart />
          </div>
          <div className="bg-white shadow-md rounded-md px-4 pt-2">
            <h2 className="mb-4 font-semibold">Distribusi Pengajuan</h2>
            <SimpleBarChart />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LayoutAdmin;
