import { Outlet } from "react-router"

const DashboardUser = () => {
 
  
  return (
    <div className="w-full text-slate-800 bg-slate-100 min-h-screen flex px-6 xl:pl-[28%] justify-center items-center">
      <Outlet />
    </div>
  )
}

export default DashboardUser