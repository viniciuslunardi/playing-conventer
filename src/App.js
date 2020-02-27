import React from 'react';
import './App.css';

import Converter from "./component/Converter";
import "./component/Converter.css"

function App() {
  return (
    <div className="App">
      <h1>Currency converter</h1>
      <div className="line">
      <Converter currencyA="USD" currencyB="BRL"></Converter>
        <Converter currencyA="BRL" currencyB="USD"></Converter>
      </div>
      <div className="line">
        <Converter currencyA="CAD" currencyB="BRL"></Converter>
        <Converter currencyA="BRL" currencyB="CAD"></Converter>
      </div>
      <div className="line">
        <Converter currencyA="EUR" currencyB="BRL"></Converter>
        <Converter currencyA="BRL" currencyB="EUR"></Converter>
      </div>
    </div>
  );
}

export default App;
