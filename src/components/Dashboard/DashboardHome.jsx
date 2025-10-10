import Underline from "../ui/Underline"
import TableRiwayat from "../ui/TableRiwayat"
import { Link } from "react-router"
import { Plus } from "lucide-react"

const DashboardHome = () => {
  return (
    <div className="xl:pl-[28%] py-20 px-8 bg-slate-100">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-800">Dashboard</h1>
        <Link to={'/dashboard/request'} className="button-yellow-home"> <Plus /> Tambah Pengajuan</Link>
      </div>
      <Underline />
      <TableRiwayat />
    </div>
  )
}

export default DashboardHome
