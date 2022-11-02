import { EditAttributes } from "@mui/icons-material";
import React from "react";



function Edit(){
    return (
    <div className="Vodka">
    <div className="container rounded bg-white mt-5 mb-5">
  <div className="row">
    <div className="col-md-3 border-right">
      <div className="d-flex flex-column align-items-center text-center p-3 py-5">
        <img
          className="rounded-circle mt-5"
          width="150px"
          src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
        />
        <span className="font-weight-bold">StakeHolder1</span>
        <span className="text-black-50">StakeHolder@mail.com.my</span>
        <span> </span>
      </div>
    </div>
    <div className="col-md-5 border-right">
      <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="text-right">Editar Perfil</h4>
        </div>
        <div className="row mt-2">
          <div className="col-md-12">
            <label className="labels">Nombre Empresa</label>
            <input
              type="text"
              className="form-control"
              placeholder="nombre"
              defaultValue=""
            />
          </div>
          
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <label className="labels">Rut</label>
            <input
              type="int"
              className="form-control"
              placeholder="enter phone number"
              defaultValue=""
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Numero de Contacto</label>
            <input
              type="int"
              className="form-control"
              placeholder="enter address line 1"
              defaultValue=""
            />
          </div>
          
          <div className="col-md-12">
            <label className="labels">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="username"
              defaultValue=""
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Password</label>
            <input
              type="text"
              className="form-control"
              placeholder="pass"
              defaultValue=""
            />
          </div>
        </div>
        <div className="col-md-12">
          <label className="labels">Detalles adicional</label>
          <input
            type="text"
            className="form-control"
            placeholder="additional details"
            defaultValue=""
          />
        </div>
        <div className="mt-5 text-center">
          <button className="btn btn-primary profile-button" type="button">
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>

  </div>
</div>
</div>
    );

}
export default Edit;
