import { LayoutDashboard, User, Send, LogOut, Menu } from "lucide-react";
import { useState } from "react";
import { logout } from "../../utils/api/auth";
import { useNavigate } from "react-router";
import { Link, useLocation } from "react-router"

const SidebarAdmin = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate()
  const logoutHandler = async () => {
    const token = localStorage.getItem("tokenKey");
    if (token) {
      const response = await logout(token);
      navigate("/");
      localStorage.removeItem("tokenKey");
      localStorage.removeItem("user");

      if (response.status === "error") {
        console.log(response);
      }
    }
  };
  const [showNav, setShowNav] = useState(false);
  const onClickHandler = () => {
    setShowNav(!showNav);
  };
  return (
    <aside
      className={`h-full pt-8 flex flex-col ${
        showNav ? "items-start px-2" : "items-center"
      } shadow-md ${showNav ? "md:w-40 xl:w-50" : "w-12"} bg-white`}
    >
      <div
        onClick={onClickHandler}
        className={`rounded-full cursor-pointer p-[6px] hover:bg-gray-200 ${
          showNav && "bg-gray-200"
        } transition-duration transition-all`}
      >
        <Menu />
      </div>
      <ul className={`mt-8 flex flex-col gap-4 ${showNav && "w-full"}`}>
        <li>
          <Link className={`hover:bg-gray-200 ${ pathname === "/admin" && "bg-gray-200" } transition-duration transition-all p-[6px] rounded-md flex gap-2 items-center`}>
            <LayoutDashboard />
            <span className={`${showNav ? "inline" : "hidden"}`}>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to={"/admin/user"} className={`hover:bg-gray-200 ${ pathname === "/admin/user" && "bg-gray-200" } transition-duration transition-all p-[6px] rounded-md flex gap-2 items-center`}>
            <User />
            <span className={`${showNav ? "inline" : "hidden"}`}>User</span>
          </Link>
        </li>
        <li>
          <Link to={"/admin/pengajuan"} className={`hover:bg-gray-200 ${ pathname === "/admin/pengajuan" && "bg-gray-200" } transition-duration transition-all p-[6px] rounded-md flex gap-2 items-center`}>
            <Send />
            <span className={`${showNav ? "inline" : "hidden"}`}>Request</span>
          </Link>
        </li>
      </ul>
      <div
        onClick={logoutHandler}
        className={`mt-8 cursor-pointer hover:bg-gray-200 ${
          showNav && "w-full"
        } transition-duration transition-all p-[6px] rounded-md flex gap-2 items-center`}
      >
        <LogOut />
        <span className={`${showNav ? "inline" : "hidden"}`}>Logout</span>
      </div>
    </aside>
  );
};

export default SidebarAdmin;
