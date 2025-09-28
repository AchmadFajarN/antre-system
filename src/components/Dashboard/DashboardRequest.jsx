import { Outlet } from "react-router"

const DashboardRequest = () => {
  return (
    <div className="w-full h-screen flex px-6 xl:px-0 flex-col justify-center items-center">
      <Outlet />
    </div>
  )
}

export default DashboardRequest