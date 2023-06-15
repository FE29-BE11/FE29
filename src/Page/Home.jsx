import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Sponsor from '../components/Sponsor/Sponsor'
import CardSection from '../components/Card/CardSection'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'

const Home = () => {
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

export default Home