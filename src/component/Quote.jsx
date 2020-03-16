import React from 'react';
import PropTypes from 'prop-types';


const Quote = ({quote, deleteQuote}) => (
        <div className="cita">
            <p>Mascota: <span>{quote.namePet}</span></p>
            <p>Dueño: <span>{quote.nameOwner}</span></p>
            <p>Fecha: <span>{quote.date}</span></p>
            <p>Hora: <span>{quote.time}</span></p>
            <p>Sintomas: <span>{quote.symptom}</span></p>
            <button className="button eliminar u-full-width" onClick={() => deleteQuote(quote.id)}>Eliminar &times;</button>
        </div>
    )
Quote.propTypes = {
    quote: PropTypes.object.isRequired,
    deleteQuote: PropTypes.func.isRequired,
}

export default Quote
