import { ClassNames } from "@emotion/react";
import { ForkRight } from "@mui/icons-material";
import React, { useState } from "react";
import { FormImput, FormImput2 } from "./formImput.js";
//import "./App.css";

function AgregarStake() {
  const [formValues, setFromValues] = useState({
    nameEmpresa: "",
    rut: "",
    email: "",
    contacto: "",
    username: "",
    password: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(formValues));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromValues({ ...formValues, [name]: value });
  };
  return (
    <div ClassNames="basty">
      <div className="container">
        <span className="title">Crear StakeHolder</span>

        <form className="row g-3" action="">
          <FormImput
            label="Nombre empresa"
            type="text"
            name="nameEmpresa"
            onChange={handleChange}
          />

          <FormImput
            label="Rut"
            type="text"
            name="rut"
            onChange={handleChange}
            className="form-control"
          />

          <FormImput
            htmlFor="inputEmail4"
            ClassNames=""
            label="email"
            type="email"
            name="email"
            onChange={handleChange}
          />

          <FormImput
            label="contacto"
            type="text"
            name="contacto"
            onChange={handleChange}
          />

          <FormImput
            label="username"
            type="text"
            name="username"
            onChange={handleChange}
          />

          <FormImput
            label="password"
            type="password"
            name="password"
            onChange={handleChange}
          />
          <div className="col-12">
            <button className="btn-primary" onClick={onSubmit}>
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AgregarStake;
