import Underline from "../ui/Underline"
import TableRiwayat from "../ui/TableRiwayat"
import { Link } from "react-router"
import { Plus } from "lucide-react"
import { useEffect, useState } from "react"
import CardDashboard from "../ui/CardDashboard"
import { getCurrentRequestValue } from "../../utils/api/dashboardValue"

const DashboardHome = () => {
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    const getVCurrentValue = async() => {
      const token = localStorage.getItem("tokenKey");
      const currentData = await getCurrentRequestValue(token);
      console.log(currentData);
      setCurrentData(currentData)
      return currentData;
    }

    getVCurrentValue();
  }, [])

  return (
    <div className="xl:pl-[28%] py-20 px-8 bg-slate-100">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-800">Dashboard</h1>
        <Link to={'/dashboard/request'} className="p-2 font-semibold border-2 border-transparent hover:border-slate-800 hover:bg-transparent transition-colors transition-duration flex items-center bg-yellow-500 rounded-md gap-2 text-sm"> <Plus size={20} /> Tambah Pengajuan</Link>
      </div>
      <Underline />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mb-8 md:gap-4">
        <CardDashboard title={"Total pengajuan"} value={currentData?.total_requests} />
        <CardDashboard title={"Pengajuan yang diterima"} value={currentData?.requests_accepted} />
        <CardDashboard title={"Pengajuan yang diproses"} value={currentData?.requests_processing} />
        <CardDashboard title={"Pengajuan yang ditolak"} value={currentData?.requests_rejected} />
      </div>
      <TableRiwayat />
    </div>
  )
}

export default DashboardHome
