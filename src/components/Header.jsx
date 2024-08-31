import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './Logo.png'

export default function Header() {
  return (
       <div className="p2 shadow-sm flex justify-between px-20 mt-3 items-center pb-10">
      <div className="logo h-24 w-[200px]  font-bold flex justify-center items-center ">
      <img className='h-36' src={logo} alt="" />
    </div>
      <div className='h-auto gap-5 w-auto flex justify-center items-center '>
      <div className="b1 h-16  w-40 flex justify-center items-center  ">
<NavLink to={"/PlanYourTrip"} className={({ isActive }) => `${isActive ? "" : ""} p1 cursor-pointer font-mono hover:bg-zinc-200 hover:rounded-xl hover:duration-300 hover:p-1 hover:px-3 `}>Plan Your Trip</NavLink>
</div>
<div className="b1 h-16  w-40 justify-center items-center flex">
<NavLink to={"/AddDestinations"} className={({ isActive }) => `${isActive ? "" : ""} p1 cursor-pointer font-mono hover:bg-zinc-200 hover:rounded-xl hover:duration-300 hover:p-1 hover:px-3`}>AddDestinations</NavLink>
</div>
<div className="b1 h-16  w-20 justify-center items-center flex ">
<NavLink to={"/Budget"} className={({ isActive }) => `${isActive ? "" : ""} p1 cursor-pointer font-mono hover:bg-zinc-200 hover:rounded-xl hover:duration-300 hover:p-1 hover:px-3`}>Budget</NavLink>
</div>
<div className="b1 h-16  w-36 justify-center items-center flex ">
<NavLink to={"/Weather"} className={({ isActive }) => `${isActive ? "" : ""} p1 cursor-pointer font-mono hover:bg-zinc-200 hover:rounded-xl hover:duration-300 hover:p-1 hover:px-3`}>Check Weather</NavLink>
</div>
</div>
<a href="#"><button className='bg-green-400 duration-300 hover:bg-green-600 text-white rounded-md px-3 py-1'>Sign In</button></a>
      </div>
  )
}
