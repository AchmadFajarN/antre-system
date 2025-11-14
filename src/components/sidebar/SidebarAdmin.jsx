import { LayoutDashboard, User, Send, LogOut, Menu } from "lucide-react";
import { useState } from "react";
import { logout } from "../../utils/api/auth";
import { useNavigate } from "react-router";

const SidebarAdmin = () => {
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
      } shadow-md ${showNav ? "w-40" : "w-12"} bg-white`}
    >
      <div
        onClick={onClickHandler}
        className={`rounded-full p-[6px] hover:bg-gray-200 ${
          showNav && "bg-gray-200"
        } transition-duration transition-all`}
      >
        <Menu />
      </div>
      <ul className={`mt-8 flex flex-col gap-4 ${showNav && "w-full"}`}>
        <li className="hover:bg-gray-200 transition-duration transition-all p-[6px] rounded-md flex gap-2 items-center">
          <LayoutDashboard />
          <span className={`${showNav ? "inline" : "hidden"}`}>Dashboard</span>
        </li>
        <li className="hover:bg-gray-200 transition-duration transition-all p-[6px] rounded-md flex gap-2 items-center">
          <User />
          <span className={`${showNav ? "inline" : "hidden"}`}>User</span>
        </li>
        <li className="hover:bg-gray-200 transition-duration transition-all p-[6px] rounded-md flex gap-2 items-center">
          <Send />
          <span className={`${showNav ? "inline" : "hidden"}`}>Request</span>
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
