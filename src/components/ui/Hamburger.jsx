const Hamburger = ({ hamburgerActive, setHamburgerActive }) => {
  return (
    <div onClick={() => setHamburgerActive(!hamburgerActive)} className="flex xl:hidden cursor-pointer flex-col gap-2">
        <div className={`w-8 h-[2px] bg-slate-900 origin-top-left transition-transform transition-duration ${ hamburgerActive && 'rotate-[43deg]' }`}></div>
        <div className={`w-8 h-[2px] bg-slate-900 transition-transform transform-duration ${ hamburgerActive && 'scale-0' }`}></div>
        <div className={`w-8 h-[2px] bg-slate-900 origin-bottom-left transition-transform transition-duration ${ hamburgerActive && '-rotate-[43deg]' }`}></div>
    </div>
  )
}

export default Hamburger