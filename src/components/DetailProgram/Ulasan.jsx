import React from 'react'

const Ulasan = () => {
  return (
    <>
  <div className="card-body d-flex flex-column justify-items-between">
    <div className="row text-center fw-600">
      <div className="col">
        <p>Ulasan</p>
      </div>
      <div className="col">
        <p>Ulasan</p>
      </div>
      <div className="col">
        <p>???</p>
      </div>
    </div>
    <div className="row text-center d-flex justify-content-center align-items-center">
      <div className="col">
        <img src="./img/material-symbols_incomplete-circle.png" alt="" />
      </div>
      <div className="col">
        <img src="./img/Vector.png" alt="" />
      </div>
      <div className="col">
        <img src="./img/Vector.png" alt="" />
      </div>
    </div>
    <div className="row text-center fw-600">
      <div className="col">
        <div className="d-flex gap-3 justify-content-center">
          <p>Cukup</p>
          <p>Sesuai</p>
          <p>Sangat Sesuai</p>
        </div>
      </div>
      <div className="col">
        <div className="">
          <p>2,023</p>
          <p className="fw-400">Total Beneficiaries</p>
        </div>
      </div>
      <div className="col">
        <p>?</p>
      </div>
    </div>
  </div>

    </>
  )
}

export default Ulasan