import React from 'react'

const Footer = () => {
  return (
    <>
            <footer>
      <div class="container">
        <h2 class="text-decoration mb-3"><i>Empowering ASEAN Youth for a Better Tomorrow</i></h2>
        <div class="hr-footer"></div>
      <div class="row my-5">
        <div class="col-4">
          <img src="./logo-bawah.png" alt="" />
          <p>AYO Kreasi Internasional Arcade Business Center 6-03North Jakarta, Indonesia</p>
        </div>
        <div class="col-2">
          <h5 class="fw-600">MENU</h5>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">PROGRAM</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">LANGGANAN</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">FORUM</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">DONASI</a>
            </li>
          </ul>
        </div>
        <div class="col">
          <h5 class="fw-600">CLASS CATEGORY</h5>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">SEMINAR</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">ONLINE PROGRAM</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">OFFLINE PROGRAM</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">WEBINAR</a>
            </li>
          </ul>
        </div>
        <div class="col">
          <h5 class="fw-600">CONTACT US</h5>
          <div class="d-flex gap-3">
            <i class="bi bi-envelope fs-3"></i>
            <i class="bi bi-facebook fs-3"></i>
            <i class="bi bi-telephone-fill fs-3"></i>
          </div>
        </div>
      </div>
      <div class="hr-footer"></div>
      </div>
    </footer>
    </>
  )
}

export default Footer