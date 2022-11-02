import React from 'react';


const Somoss =() =>{
    return (
        <div className="basty">
        <div className="container">
            <div className="formulario">
            
            <span className="title"> Crear Conductor </span>
        
            
            <form className="row g-3">
            
            <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                Email
                </label>
                <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
                <label  className="form-label">
                Nombre del Conductor
                </label>
                <input type="text" className="form-control" id="inputPassword4" />
            </div>
            
            <div className="col-md-6">
                <label  className="form-label">
                Telefono de Contacto
                </label>
                <input
                type="int"
                className="form-control"
                id="DireccionDestino"
                placeholder="Ejemplo: +56979826650"
                />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                Username
                </label>
                <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                Password designada
                </label>
                <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                Prioridad
                </label>
                <input type="int" className="form-control" id="inputCity" />
            </div>
            
            <div className="col-12">
                <button type="submit" className="btn btn-primary">
                Enviar
                </button>
            </div>
            </form>
            </div>
        

 </div>
    


</div>
    );
  }
  
  export default Somoss;