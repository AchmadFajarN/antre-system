import { LayoutDashboard, User, Send, LogOut } from 'lucide-react'

const SidebarAdmin = () => {
  return (
    <sidebar className="fixed bg-slate-50 left-0 h-screen rounded-md shadow-xl px-6 py-4  w-[20%]" >

        <h1 className='text-xl text-center font-bold'>SIPEKAD ADMIN</h1>
        <p className='px-2 text-sm font-semibold bg-yellow-500 text-slate-50 text-center rounded-md'>Sistem Pengajuan Akademis</p>
        <ul className='mt-10'>
            <li className={`list-sidebar flex items-center gap-4 hover:border-slate-800 border-b-4 transition-color transition-duration border-transparent`}><LayoutDashboard />  Dashboard</li>
            <li className={`list-sidebar flex items-center gap-4 hover:border-slate-800 border-b-4 transition-color transition-duration border-transparent`}><User /> Pengajuan</li>
            <li className={`list-sidebar flex items-center gap-4 hover:border-slate-800 border-b-4 transition-color transition-duration border-transparent`}><Send />User</li>
        </ul>
        <button className='list-sidebar flex items-cener gap-4 mt-8'>
            <LogOut /> Logout
        </button>
    </sidebar>
  )
}

export default SidebarAdmin