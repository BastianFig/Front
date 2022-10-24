import React from 'react';

const Prin =() => {
    return (
  <div className="principal">

<div
  id="carouselExampleFade"
  className="carousel slide carousel-fade"
  data-bs-ride="carousel"
  data-interval="5000"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./taxi3.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="./taxi2.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="./taxi33.png" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>



  

{/*hasta aca funcion que ayuda a las cosas locas*/}

        
        <div className="hola">
        <div className="container marketing">
  {/* Three columns of text below the carousel */}
  <div className="row">
    <div className="col-lg-4">
      
    <img
        className="bd-placeholder-img rounded-circle"
        width={200}
        height={200}
        src="./taxi1.png"
        role="img"
        aria-label="Placeholder: 140x140"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      />
      <h2 className="fw-normal">Heading</h2>
      <p>
        Some representative placeholder content for the three columns of text
        below the carousel. This is the first column.
      </p>
      <p>
        <a className="btn btn-secondary" href="#">
          View details »
        </a>
      </p>
    </div>
    {/* /.col-lg-4 */}
    <div className="col-lg-4">
    <img
        className="bd-placeholder-img rounded-circle"
        width={200}
        height={200}
        src="./taxi1.png"
        role="img"
        aria-label="Placeholder: 140x140"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      />
      
      <h2 className="fw-normal">Heading</h2>
      <p>
        Another exciting bit of representative placeholder content. This time,
        we've moved on to the second column.
      </p>
      <p>
        <a className="btn btn-secondary" href="#">
          View details »
        </a>
      </p>
    </div>
    {/* /.col-lg-4 */}
    <div className="col-lg-4">
      <img
        className="bd-placeholder-img rounded-circle"
        width={200}
        height={200}
        src="./taxi1.png"
        role="img"
        aria-label="Placeholder: 140x140"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      />
      <h2 className="fw-normal">Conductor 1</h2>
      <p>
        Le gustan las monas chinas.
      </p>
      <p>
        <a className="btn btn-primary "  href="#">
          View details »
        </a>
      </p>
    </div>
    {/* /.col-lg-4 */}
  </div>
  {/* /.row */}
</div>

          

          

                    
        </div>
        {/*hasta aca funcion hola que tiene las foticos*/}
            
      <div className="chao">
        <div className="footer"> 
                  <>
          <meta charSet="UTF-8" />
          <title>Pie de pagina</title>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
          />
          <link rel="stylesheet" href="basty.css" />
          {/*Iconos*/}
        </>
                  <footer className="pie-pagina">
                  <div className="grupo-1">
                    <div className="box">
                      <figure>
                        <a href="#">
                          <img src="./TRANSPORTE.png" />
                        </a>
                      </figure>
                    </div>
                    <div className="box">
                      <h2>SOBRE NOSOTROS</h2>
                      <p>
                        Bienvenidos a trasportes Jcu somos una empresa dedicada al transporte de weones
                      </p>
                      <p>
                        Grande Colocolo
                      </p>
                    </div>
                    <div className="box">
                      <h2>SIGUENOS</h2>
                      <div className="red-social">
                        <a href="#" className="fa fa-facebook" />
                        <a href="https://www.instagram.com/_nxred._/" className="fa fa-instagram" />
                        <a href="#" className="fa fa-twitter" />
                        <a href="#" className="fa fa-youtube" />
                      </div>
                    </div>
                  </div>
                  <div className="grupo-2">
                    <small>
                      © 2021 <b>SLee Dw</b> - Todos los Derechos Reservados.
                    </small>
                  </div>
                </footer>
            </div>
            </div>
    </div>



        






      
    );
  }
  
  export default Prin;