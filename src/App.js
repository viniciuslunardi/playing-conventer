import React from 'react';
import './App.css';

import Converter from "./component/Converter";
import "./component/Converter.css"

function App() {
  return (
    <div className="App">
    <Converter currencyA="USD" currencyB="BRL">
    </Converter>
    </div>
  );
}

export default App;
