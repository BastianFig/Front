import React from 'react';

const Sesionn =() => {
    return (
        <div className='Sessionn'>
            <h1>Nosotros somos sesion</h1>
            <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width+device-width ,initial-scale=1.0" />
  <link
    rel="stylesheet"
    href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
  />
  <link rel="stylesheet " href="style.css" />
  <title> Ingreso</title>
  <div className="container">
    <div className="forms">
      <div className="form login">
        <span className="title">Ingreso</span>
        <form action="#">
          <div className="input-field">
            <input type="text" placeholder="Ingresa tu email" required="" />
            <i className="uil uil-envelope icon" />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Ingresa tu contrasena"
              required=""
            />
            <i className="uil uil-lock icon" />
          </div>
          <div className="checkbox-text">
            <div className="checkbox-content">
              <input type="checkbox" id="logCheck" />
              <label htmlFor="logCheck">Recordarme</label>
            </div>
            <a href="#" className="text">
              Olvido contrasena?
            </a>
          </div>
          <div className="input-field button">
            <input type="button" defaultValue="Entrar" />
          </div>
        </form>
      </div>
    </div>
  </div>
</>


            
        

        </div>
      
    );
  }
  
  export default Sesionn;