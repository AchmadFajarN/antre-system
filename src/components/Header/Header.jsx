import { Link } from "react-router"
import Button from "../ui/Button"
const Header = () => {
  return (
    <header className="header-homepage">
      <div>
        <h1 className="font-semibold md:text-2xl text-slate-800">SIPEKAD</h1>
        <p className="text-xs font-semibold">Sistem Pengajuan Akademi</p>
      </div>
      <nav className="flex gap-4 items-center text-sm xl:text-[16px]">
        <Link className="font-semibold hidden md:inline" to={'/auth'}>Sign-in</Link>
        <Button path={'/auth/register'} content={'Sign-up'} className={'rounded-xl'} />
      </nav>
    </header>
  )
}

export default Header
