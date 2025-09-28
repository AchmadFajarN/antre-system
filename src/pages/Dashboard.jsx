import { Outlet } from "react-router"
import Sidebar from "../components/sidebar/Sidebar"
import HeaderDashboard from "../components/Header/HeaderDashboard"
import { useState } from "react"

const Dashboard = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  return (
    <>
    <HeaderDashboard active={sidebarActive} setActive={setSidebarActive} />
    <main className="relative">
      <Sidebar activeSidebar={sidebarActive} setActiveSideBar={setSidebarActive} />
        <Outlet />
    </main>
    </>
  )
}

export default Dashboard