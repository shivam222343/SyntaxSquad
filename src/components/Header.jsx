import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './Logo.png'


function Header() {
  return (
    <div className="navbar h-24 w-[100vw] flex">
    <div className="logo h-24 w-[200px]  font-bold flex justify-center items-center ">
      <img className='h-24' src={logo} alt="" />
    </div>
    <div className="Opts h-24 min-w-[80vw] hidden md:flex font-bold flex justify-center items-center ">
<div className="b1 h-16  w-40 flex justify-center items-center  ">
<NavLink to={"/PlanYourTrip"} className={({ isActive }) => `${isActive ? "" : ""} p1 cursor-pointer font-mono hover:bg-zinc-200 hover:rounded-xl hover:duration-300 hover:p-1 hover:px-3 `}>Plan Your Trip</NavLink>

</div>
<div className="b1 h-16  w-24 justify-center items-center flex">
<NavLink to={"/PlanYourTrip"} className={({ isActive }) => `${isActive ? "" : ""} p1 cursor-pointer font-mono hover:bg-zinc-200 hover:rounded-xl hover:duration-300 hover:p-1 hover:px-3`}>Hotels</NavLink>

</div>
<div className="b1 h-16  w-36 justify-center items-center flex ">
<NavLink to={"/Budget"} className={({ isActive }) => `${isActive ? "" : ""} p1 cursor-pointer font-mono hover:bg-zinc-200 hover:rounded-xl hover:duration-300 hover:p-1 hover:px-3`}>Budget</NavLink>
</div>
<div className="b1 h-16  w-36 justify-center items-center flex ">
<NavLink to={"/Weather"} className={({ isActive }) => `${isActive ? "" : ""} p1 cursor-pointer font-mono hover:bg-zinc-200 hover:rounded-xl hover:duration-300 hover:p-1 hover:px-3`}>Check Weather</NavLink>
</div>
<div className="b1 h-16  w-28 justify-center items-center flex ">
<div className="p1 cursor-pointer font-mono hover:bg-zinc-200 hover:rounded-xl hover:duration-300 hover:p-1 hover:px-3 ">My trips</div>
</div>
    </div>
  </div>
  )
}

export default Header