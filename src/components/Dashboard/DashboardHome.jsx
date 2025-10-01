import PengajuanCharts from "../ui/Chart"
import Underline from "../ui/Underline"

const DashboardHome = () => {
  return (
    <div className="lg:pl-90 xl:pl-100 py-20 px-8 bg-slate-100">
      <h1 className="text-2xl font-semibold text-slate-800">Dashboard</h1>
      <Underline />
      <PengajuanCharts />
    </div>
  )
}

export default DashboardHome
