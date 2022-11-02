import React, { useState } from "react";
import { FormImput, FormImput2 } from "./formImput";

function ViajeStake() {
  const [formValues, setFromValues] = useState({
    date: "",
    direccionOrigen: "",
    direccionDestino: "",
    Hinicio: "",
    Htermino: "",
    nombreEmpresa: "",
    nombreStake: "",
    nombreRepre: "",
    contacto: "",
    n_pasajeros: "",
    n_maletas: "",
    t_equi: "",
    extra: "",
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
    <div className="basty">
      <div className="container">
        <span className="title">Pedir Viaje</span>
        <from className="row g-3">
          <FormImput2
            label="Nombre Empresa"
            type="text"
            name="nombreEmpresa"
            onChange={handleChange}
          />

          <FormImput2
            label="Nombre Stake Holder"
            type="text"
            name="nombreStake"
            onChange={handleChange}
          />

          <FormImput2
            label="Nombre del Representante"
            type="text"
            name="nombreRepre"
            onChange={handleChange}
          />

          <FormImput
            label="Fecha"
            type="text"
            name="date"
            onChange={handleChange}
          />

          <FormImput
            label="Contacto"
            type="text"
            name="contacto"
            onChange={handleChange}
          />

          <FormImput
            label="Direccion Origen"
            type="text"
            name="direccionOrigen"
            onChange={handleChange}
          />

          <FormImput
            label="Direccion Destino"
            type="text"
            name="direccionDestino"
            onChange={handleChange}
          />

          <FormImput
            label="Hora Inicio"
            type="text"
            name="Hinicio"
            onChange={handleChange}
          />

          <FormImput
            label="Hore Termino"
            type="text"
            name="Htermino"
            onChange={handleChange}
          />

          <FormImput
            label="Numero de maletas"
            type="text"
            name="n_maletas"
            onChange={handleChange}
          />

          <FormImput
            label="Numero de Pasajeros"
            type="text"
            name="n_pasajeros"
            onChange={handleChange}
          />

          <div className="col-12">
            <label htmlFor="inputState" className="form-label">
              Tamaño de maletas
            </label>
            <select id="inputState" className="form-select">
              <option selected=""></option>
              <option> Pequeña </option>
              <option> Mediana </option>
              <option> Grande </option>
            </select>
          </div>

          <input
            type="text"
            class="form-control"
            placeholder="Campo de texto"
          ></input>

          <div className="col-12">
            <button className="btn btn-primary" onClick={onSubmit}>
              Enviar
            </button>
          </div>
        </from>
      </div>
    </div>
  );
}

export default ViajeStake;
