import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className='flext items-center mx-56 gap-9 '>
      <h1 className='font-bold font-sans text-[50px] mt-20 text-center'> <span className='text-red-500'>Plan Your New Trip With Us :</span> Personalized Iteneraries at Your Fingertips</h1>
      <p className='mt-6 text-lg text-zinc-700 text-center'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budgets.</p>
      <div className="bx h-14 flex justify-center items-center "> 
      <NavLink to={"/PlanYourTrip"} className={({ isActive }) => `${isActive ? "" : ""} p1 cursor-pointer font-mono hover:bg-zinc-200 hover:rounded-xl hover:duration-300 hover:p-1 hover:px-3 `}>      <button className='bg-black text-white rounded-md px-3 py-1'>Get Started, Its Free</button></NavLink>
      </div>
    </div>
  )
}

export default Home

