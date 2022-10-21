import React from 'react';

const Prin =() => {
    return (
        <div className="principal">
          
            <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="true"
            >
            <div className="carousel-indicators">
                <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
                />
                <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
                />
                <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
                />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                
                <img src="./taxi2.png" className="d-block w-100"/>
                
                </div>
                <div className="carousel-item">
                
                <img src="./taxi3.png" className="d-block w-100"  />
                </div>
                
                <div className="carousel-item">
                
                <img src="./taxi33.png" className="d-block w-100"  />
                </div>
                
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
            </div>


            <>
  <hr className="featurette-divider" />
  <div className="row featurette">
    <div className="col-md-7">
      <h2 className="featurette-heading fw-normal lh-1">
        lkdjaslkd <span className="text-muted"> kljdklsa </span>
      </h2>
      <p className="lead">
        sjdlka
      </p>
    </div>
    <div className="col-md-5">
      <svg
        className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
        width={500}
        height={500}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: 500x500"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#eee" />
        <text x="50%" y="50%" fill="#aaa" dy=".3em">
          500x500
        </text>
      </svg>
    </div>
  </div>
  <hr className="featurette-divider" />
  <div className="row featurette">
    <div className="col-md-7 order-md-2">
      <h2 className="featurette-heading fw-normal lh-1">
        skdlsad<span className="text-muted"> sadkasl </span>
      </h2>
      <p className="lead">
        jskldjasdlka
      </p>
    </div>
    <div className="col-md-5 order-md-1">
      <svg
        className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
        width={500}
        height={500}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: 500x500"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#eee" />
        <text x="50%" y="50%" fill="#aaa" dy=".3em">
          500x500
        </text>
      </svg>
    </div>
  </div>
  <hr className="featurette-divider" />
  <div className="row featurette">
    <div className="col-md-7">
      <h2 className="featurette-heading fw-normal lh-1">
       lksdjsalkd <span className="text-muted">aldjsald </span>
      </h2>
      <p className="lead">
        adjalskdjaskld
      </p>
    </div>
    <div className="col-md-5">
      <svg
        className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
        width={500}
        height={500}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: 500x500"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#eee" />
        <text x="50%" y="50%" fill="#aaa" dy=".3em">
          500x500
        </text>
      </svg>
    </div>
  </div>
  <hr className="featurette-divider" />
</>




            <div className="card-group">
                <div className="card">
                    <img src="./taxi1.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </p>
                    </div>
                    <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img src="./taxi1.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        This card has supporting text below as a natural lead-in to additional
                        content.
                    </p>
                    </div>
                    <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img src="./taxi1.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </p>
                    </div>
                    <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                </div>

                


                

            


           

        </div>

        






      
    );
  }
  
  export default Prin;