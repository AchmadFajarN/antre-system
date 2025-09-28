import { LayoutDashboard, LogOut, User, Send } from "lucide-react"
import { Link, useLocation } from "react-router"

const Sidebar = ({ activeSidebar, setActiveSideBar }) => {
    const { pathname } = useLocation()
    return(
        <sidebar className={`fixed w-4/6 md:w-1/3 xl:w-1/4 ${ activeSidebar? '-translate-x-0': '-translate-x-full' } z-40 shadow-2xl xl:translate-x-0 transition-duration transition-transform bg-white border-r-4 border-slate-500 h-screen`}>
            <div className="px-4 pt-8 flex flex-col items-center justify-center">
                <div className="size-30 rounded-full border-4 border-slate-500 shadow-xl overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="image" className="w-full h-full object-center object-cover" />
                </div>
                <p className="text-center mt-4 font-semibold text-xl text-slate-800">Your name</p>
                <p>1234567890</p>
            </div>
            <ul className="pt-8 flex flex-col justify-center text-slate-800 items-center text-center">
                <li className={`list-sidebar ${ pathname === '/dashboard/user' && 'bg-slate-400 text-slate-200' }`}><Link onClick={() => setActiveSideBar(!activeSidebar)} to={'/dashboard/user'} className="flex items-center gap-2"><User /> User</Link></li>
                <li className={`list-sidebar ${ pathname === '/dashboard' && 'bg-slate-400 text-slate-200' }`}><Link onClick={() => setActiveSideBar(!activeSidebar)} to={'/dashboard'} className="flex items-center gap-2"><LayoutDashboard />Dashboard</Link></li>
                <li className={`list-sidebar ${ pathname === '/dashboard/request' && 'bg-slate-400 text-slate-200' }`}><Link onClick={() => setActiveSideBar(!activeSidebar)} to={'/dashboard/request'} className="flex items-center gap-2"><Send />Minta Permintaan</Link></li>
                <li className="mt-8 list-sidebar"><Link className="flex items-center gap-2"><LogOut />Log Out</Link></li>
            </ul>
        </sidebar>

    )
}

export default Sidebar