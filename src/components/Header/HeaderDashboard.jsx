import { Bell, ArrowLeft } from "lucide-react"
import Hamburger from "../ui/Hamburger"
import BackLink from "../ui/BackLink"


const HeaderDashboard = ({ active, setActive }) => {
  return (
    <header className="w-full md:pl-90 xl:pl-100 bg-white fixed border-b-4 border-slate-600 z-40 top-0 shadow-xl items-center gap-4 py-4 px-6 flex justify-end">
        <div className="flex-5">
          <BackLink />
        </div>
        <div><Bell /></div>
        <Hamburger hamburgerActive={active} setHamburgerActive={setActive} />
    </header>
  )
}

export default HeaderDashboard