import React from 'react'
import { Navbar } from 'react-bootstrap'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero.jsx'
import Sponsor from './components/Sponsor/Sponsor'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Donation from './Page/Donation'




const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Sponsor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="*" element={<p>page not found</p>} />
      </Routes>
    </>
  )
}

export default App