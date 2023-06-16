import React from 'react'
import { Navbar } from 'react-bootstrap'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero.jsx'
import Sponsor from './components/Sponsor/Sponsor'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import CardSection from './components/Card/CardSection'
import Footer from './components/Footer/Footer'
import DetailProgram from './components/DetailProgram/Detail'
import Deskripsi from './Page/Deskripsi'




const App = () => {
  return (
    <>
      <Home />
    </>
  )
}

export default App