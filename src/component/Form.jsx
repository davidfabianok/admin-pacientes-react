import React, { useState } from "react";
import PropTypes from 'prop-types';
import uuid from "uuid/v4";

const Form = ({ addQuotes }) => {
  const [quote, setQuote] = useState({
    namePet: "",
    nameOwner: "",
    date: "",
    time: "",
    symptom: ""
  });
  const [error, setError] = useState(null);
  const handleChange = event => {
    setQuote({
      ...quote,
      [event.target.name]: event.target.value
    });
  };

  const submitQuote = event => {
    event.preventDefault();
    if (
      namePet === "" ||
      nameOwner === "" ||
      date === "" ||
      time === "" ||
      symptom === ""
    ) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    quote.id = uuid();
    addQuotes(quote);
    setQuote({
      namePet: "",
      nameOwner: "",
      date: "",
      time: "",
      symptom: ""
    });
  };
  const { namePet, nameOwner, date, time, symptom } = quote;

  return (
    <div>
      <h2>Crear cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form action="" onSubmit={submitQuote}>
        <label htmlFor="namePet">Nombre Mascota</label>
        <input
          type="text"
          name="namePet"
          id="namePet"
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={handleChange}
          value={namePet}
        />
        <label htmlFor="nameOwner">Nombre Dueño</label>
        <input
          type="text"
          name="nameOwner"
          id="nameOwner"
          className="u-full-width"
          placeholder="Nombre dueño"
          onChange={handleChange}
          value={nameOwner}
        />
        <label htmlFor="date">Fecha</label>
        <input
          type="date"
          name="date"
          id="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />

        <label htmlFor="time">Hora</label>
        <input
          type="time"
          name="time"
          id="time"
          className="u-full-width"
          onChange={handleChange}
          value={time}
        />

        <label htmlFor="symptom">Sintomas</label>
        <textarea
          name="symptom"
          className="u-full-width"
          onChange={handleChange}
          value={symptom}
        ></textarea>
        <button type="submit" className="u-full-width button-primary ">
          Agregar cita
        </button>
      </form>
    </div>
  );
};
Form.propTypes = {
	addQuotes: PropTypes.func.isRequired
}
export default Form;
