import React from 'react'

function navbar() {
  return (
    <nav classNameName="navbar navbar-expand-lg navbar-dark bg-dark">
      
      
  <div classNameName="container">
  <a href="" className="navbar-brand d-flex align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" className="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
        <strong>Inicio</strong>
      </a>
    <section className="py-5 text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">Album de fotos en React</h1>
        <p className="lead text-muted">Developed and designed by Rene Fuentes. ©2022. All rights reserved.</p>
        <p>
          <a href="https://github.com/ReneKubax" className="btn btn-primary my-2">Mi repositorio de github</a>
          <a href="https://www.instagram.com/melanie_bonilla/" className="btn btn-secondary my-2">Instagram de la fotografa</a>
        </p>
      </div>
    </div>
  </section>
  </div>
</nav>
  )
}

export default navbar