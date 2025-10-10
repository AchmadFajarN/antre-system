import { Outlet, useNavigate } from "react-router"
import Sidebar from "../components/sidebar/Sidebar"
import HeaderDashboard from "../components/Header/HeaderDashboard"
import { useState, useEffect } from "react"

const Dashboard = () => {
  const navigate = useNavigate();
  const [sidebarActive, setSidebarActive] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('tokenKey');
    if (token) {
      setIsLogin(true)
    } else {
      setIsLogin(false);
      navigate('/');
    }
  }, [])

  if (!isLogin) {
    return null
  }
  
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