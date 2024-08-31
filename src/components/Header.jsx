import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
       <div className="p2 shadow-sm flex justify-between px-20 mt-3 items-center pb-10">
      <div className="logo text-3xl font-bold text-red-500">Logo</div>
      <div className="b1 h-16  w-40 flex justify-center items-center  ">
<NavLink to={"/PlanYourTrip"} className={({ isActive }) => `${isActive ? "" : ""} p1 cursor-pointer font-mono hover:bg-zinc-200 hover:rounded-xl hover:duration-300 hover:p-1 hover:px-3 `}>Plan Your Trip</NavLink>

</div>
<div className="b1 h-16  w-24 justify-center items-center flex">
<NavLink to={"/AddDestinations"} className={({ isActive }) => `${isActive ? "" : ""} p1 cursor-pointer font-mono hover:bg-zinc-200 hover:rounded-xl hover:duration-300 hover:p-1 hover:px-3`}>AddDestinations</NavLink>

</div>
<div className="b1 h-16  w-36 justify-center items-center flex ">
<NavLink to={"/Budget"} className={({ isActive }) => `${isActive ? "" : ""} p1 cursor-pointer font-mono hover:bg-zinc-200 hover:rounded-xl hover:duration-300 hover:p-1 hover:px-3`}>Budget</NavLink>
</div>
<div className="b1 h-16  w-36 justify-center items-center flex ">
<NavLink to={"/Weather"} className={({ isActive }) => `${isActive ? "" : ""} p1 cursor-pointer font-mono hover:bg-zinc-200 hover:rounded-xl hover:duration-300 hover:p-1 hover:px-3`}>Check Weather</NavLink>
</div>
      <button className='bg-black text-white rounded-md px-3 py-1'>Sign In</button>
      </div>
  )
}
