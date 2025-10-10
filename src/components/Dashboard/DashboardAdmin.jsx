import PengajuanCharts from "../ui/Chart"
import Underline from "../ui/Underline"

const DashboardAdmin = () => {
  return (
    <div className="xl:pl-[28%] py-20 px-8 bg-slate-100">
      <h1 className="text-2xl font-semibold text-slate-800">Dashboard Admin</h1>
      <Underline />
      <PengajuanCharts />
    </div>
  )
}

export default DashboardAdmin
