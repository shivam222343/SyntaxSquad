import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <Header/>
  <Outlet/>
    </>
  )
}

export default App
