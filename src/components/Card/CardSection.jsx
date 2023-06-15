import React from 'react'


const CardSection = () => {
  return (
    <>
    <h2 className="d-flex gap-4 px-5 pb-5 pt-10 justify-content-center">Our Programs</h2>
    <section className="rekomendasi p-top-10 d-flex gap-4 px-5 pb-5 pt-3 justify-content-center">
    
      <div className="card">
        <img src="" alt="" />
            <div className="card-body">
                <div className="row mb-3">
                    <div className="col-5">
                        <div className="rekomendasi-kategori text-center fw-600"><small>Seminar</small>
                        </div>
                    </div>
                  <div className="col">
                    <p className="text-rekomendasi-kategori text-muted">Youth & Technology Workshop </p>
                  </div>
                </div>
            </div>
                <h5 className="fw-600">A Dialogue on Gender Equality and Sustainable Development</h5>
                <p>Gender equality remains a crucial goal enshrined in the Sustainable Development Goals.</p>
     </div>

     <div className="card">
        <img src="" alt="" />
            <div className="card-body">
                <div className="row mb-3">
                    <div className="col-5">
                        <div className="rekomendasi-kategori text-center fw-600"><small>Seminar</small>
                        </div>
                    </div>
                  <div className="col">
                    <p className="text-rekomendasi-kategori text-muted">Youth & Technology Workshop </p>
                  </div>
                </div>
            </div>
                <h5 className="fw-600">ASEAN Youth Conference</h5>
                <p>Youth and Digital Transformation A Step Towards Digital Community
                  with ASEAN Youth Digital Forum</p>
     </div>

     <div className="card">
        <img src="" alt="" />
            <div className="card-body">
                <div className="row mb-3">
                    <div className="col-5">
                        <div className="rekomendasi-kategori text-center fw-600"><small>Seminar</small>
                        </div>
                    </div>
                  <div className="col">
                    <p className="text-rekomendasi-kategori text-muted">Youth & Technology Workshop </p>
                  </div>
                </div>
            </div>
                <h5 className="fw-600">Youth-Tech : Utilising Technology as an Instrument of Peace</h5>
                <p>The rapid growth of technology has contributed to bringing futuristic items and lifestyles</p>
     </div>
      </section>
    </>
  )
}

export default CardSection
