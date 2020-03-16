import React, { useState, useEffect } from "react";
import Form from "./component/Form";
import Quote from "./component/Quote";

const App = () => {
  let initialQuote = JSON.parse(localStorage.getItem('quotes'));
  if(!initialQuote) {
    initialQuote = [];
  }
  const [quotes, setQuotes] = useState(initialQuote);
  useEffect(() => {
    if(initialQuote){
      localStorage.setItem('quotes', JSON.stringify(quotes));
    } else {
      localStorage.setItem('quotes', JSON.stringify([]));
    }
    
  }, [quotes, initialQuote])
  const addQuote = quote => {
    setQuotes([...quotes, quote]);
  };

  const deleteQuote = id => {
    const temQoutes = quotes.filter(quote => quote.id !== id);
    setQuotes(temQoutes);
  };
  const title = quotes.length !== 0 ? "Administra tus citas" : "No hay citas";
  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="one-half column">
          <Form addQuotes={addQuote} />
        </div>
        <div className="one-half column">
          <h2>{title}</h2>
          {quotes.map(quote => (
            <Quote key={quote.id} quote={quote} deleteQuote={deleteQuote} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
