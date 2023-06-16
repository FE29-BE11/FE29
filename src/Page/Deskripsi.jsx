import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import DetailProgram from '../components/DetailProgram/Detail'
import Ulasan from '../components/DetailProgram/Ulasan'
import RekomendasiKelas from '../components/DetailProgram/RekomendasiKelas'
import Footer from '../components/Footer/Footer'

const Deskripsi = () => {
  return (
    <>
        <NavBar />
        <DetailProgram />
        <Ulasan />
        <RekomendasiKelas />
        <Footer />
    </>
  )
}

export default Deskripsi