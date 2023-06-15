import React from 'react'

const TestDetail = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-transparant">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="./img/logo.png" alt="" />
        </a>
        <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse gap-3 d-flex justify-content-between" id="navbarNav">
          <ul className="navbar-nav fw-600 gap-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">PROGRAM</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">LANGGANAN</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">FORUM</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">DONASI</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input type="search" id="search" placeholder="Cari Program" />
          </form>
          <div className="d-flex align-items-center justify-content-center">
            <a href="" className="fw-600 text-dark text-decoration-none">NAMA ORANG</a>
            <a href=""><i className="bi bi-person-circle fs-3 ms-3"></i></a>
            <a href=""><i className="bi bi-bell fs-3 ms-3 text-dark"></i></a>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default TestDetail