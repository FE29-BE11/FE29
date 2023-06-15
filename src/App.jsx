import React from 'react'
import { Navbar } from 'react-bootstrap'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero.jsx'
import Sponsor from './components/Sponsor/Sponsor'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Donation from './Page/Donation'
import CardSection from './components/Card/CardSection'
import Footer from './components/Footer/Footer'




const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Sponsor />
      <CardSection />
      <Footer />
    </>
  )
}

export default App