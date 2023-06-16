import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PaymentPage from '../../Page/PaymentPage';

const DetailProgram = () => {
  const navigate = useNavigate();

  return (
    <>
 <main className="mt-5">
    <div className="jumbotron">
      <div className="container">
        <img src="./img/landingPage.png" width="100%" alt="" />
        <button type="button" className="btn btn-primary m-4" onClick={()=>navigate(PaymentPage)}>JOIN NOW!
        </button>
        <div className="tentang">
          <h4 className="fw-600">Tentang Kelas</h4>
          <p className="fw-400">
            The rapid growth of technology has contributed to bringing
            futuristic items and lifestyles faster than ever. However, there is
            a massive gap between those who are ready to embrace the change and
            those who are not. In addition, technology meant to help humans has
            been misused by those to complicate and perpetuate conflicts. This
            is happening, among others, through cybercrimes, hate speeches,
            hoaxes, and discrimination on digital platforms.
          </p>
          <br />
          <h4 className="fw-600">Rician Kegiatan</h4>
          <p className="fw-400">
            The ASEAN Cybersecurity Skilling Programme is a flagship programme
            of ASEAN Foundation, in partnership with Microsoft. The programme
            supports the ASEAN ICT Masterplan 2020 and ASEAN Work Plan on
            Education 2021-2025. The ASEAN Foundation and Microsoft will
            collaborate with the ASEAN Youth Organization (AYO).
          </p>
          <h5>The program consists of two sessions:</h5>
          <ul>
            <li>Training of Trainers</li>
            <li>Empowerment Session</li>
            <li>Event Period: 1 July – 30 December 2022.</li>
          </ul>
          <p />
        </div>
      </div>
    </div>
  </main>
    </>
  )
}

export default DetailProgram