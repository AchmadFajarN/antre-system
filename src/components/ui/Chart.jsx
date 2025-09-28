import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
} from "chart.js";
import { Pie, Line } from "react-chartjs-2";
import { objectDataDummy } from "../../utils/constant";
import { Dot } from "lucide-react";

// register chart.js modules
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
);

const PengajuanCharts = () => {
  const data = objectDataDummy();
  const allData = Object.values(data).flat();
  const allDataWithCategory = Object.entries(data)
    .filter(([_, arr]) => arr)
    .flatMap(([kategori, arr]) =>
      arr.map((item) => ({
        ...item,
        kategori,
        jenis: item.jenis || kategori,
      }))
    );

  const sortedRiwayat = allDataWithCategory.sort(
    (a, b) => new Date(b.tanggal) - new Date(a.tanggal)
  );

  const statusCount = allData.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {});

  const statusData = {
    labels: Object.keys(statusCount),
    datasets: [
      {
        data: Object.values(statusCount),
        backgroundColor: ["#3B82F6", "#00c850", "#fb2c36"],
      },
    ],
  };

  const monthCount = allData.reduce((acc, item) => {
    const month = new Date(item.tanggal).toLocaleString("default", {
      month: "short",
    });
    acc[month] = (acc[month] || 0) + 1;
    return acc;
  }, {});

  const trendData = {
    labels: Object.keys(monthCount),
    datasets: [
      {
        label: "Jumlah Pengajuan",
        data: Object.values(monthCount),
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        fill: true,
      },
    ],
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex-center flex-col xl:max-h-[300px] border-4 rounded-xl p-4 border-slate-500 shadow-xl">
          <h2 className="font-semibold text-slate-800">
            {allData.length >= 1
              ? "Distribusi Status Pengajuan"
              : "Kamu belum request apapun"}
          </h2>
          {allData.length >= 1 && <Pie data={statusData} />}
        </div>

        <div className="flex-center flex-col xl:max-h-[300px] rounded-xl border-4 border-slate-500 shadow-xl">
          <h2 className="font-semibold text-slate-800">
            {allData.length >= 1
              ? "Tren Pengajuan perbulan"
              : "Kamu belum request apapun"}
          </h2>
          {allData.length >= 1 && <Line data={trendData} />}
        </div>
      </div>
      <div className="mt-8 rounded-xl">
        <h2 className="font-semibold mt-4 ml-4 text-slate-800">
          Riwayat Permintaan
        </h2>
        <div className="pl-4 mb-4 flex gap-2 items-center">
          <div className="flex items-center gap-2">
            <span className="bg-red-500 inline-block size-2 rounded-full"></span>
            <p className="text-xs">Rejected</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-green-700 inline-block size-2 rounded-full"></span>
            <p className="text-xs">Accept</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-yellow-500 inline-block size-2 rounded-full"></span>
            <p className="text-xs">Menunggu</p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900">
                <th className="table-head">Jenis Request</th>
                <th className="table-head hidden md:table-cell">Kategori</th>
                <th className="table-head hidden md:table-cell">Tanggal</th>
                <th className="table-head">Status</th>
              </tr>
            </thead>
            <tbody>
              {sortedRiwayat.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="table-data hidden md:table-cell">{item.jenis}</td>
                  <td className="table-data">{ item.kategori }</td>
                  <td className="table-data hidden md:table-cell">{item.tanggal}</td>
                  <td className="px-4 border-b">
                    {item.status === "success" ? (
                      <Dot className="text-green-700" size={50} />
                    ) : item.status === "menunggu" ? (
                      <Dot size={50} className="text-yellow-500" />
                    ) : (
                      <Dot size={50} className="text-red-500" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PengajuanCharts;
