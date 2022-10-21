import React from 'react';
import {Link} from 'react-router-dom';



const Admin =() =>{
    return(
      <div>

      
    <nav className="navbar navbar-expand-lg bg-dark">
      
       
      <div className="container-fluid">

        <Link className="navbar-brand text-light" to='/Principal'>
          <img src='./TRANSPORTE.png' width='60'></img>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <Link className="nav-link active text-light" aria-current="page" to='/Sesion'>Iniciar sesion</Link>
            <Link className="nav-link text-light" to='/Somos'>Quienes somos?</Link>
            <Link className="nav-link text-light" to='/Formulario'>Pide tu viaje Aqui!</Link>
            
          </div>
        </div>
      </div>
    </nav>
    

    </div>

    )
    
}
export default Admin;