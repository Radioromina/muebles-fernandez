
import './App.css';
import React from 'react';
import CartContext from './context/CartContext';
import Rutas from './Routes/Rutas';

function App() {
  return (
    <div className="App">
      <CartContext>
        <Rutas/>
      </CartContext>
    </div>
  );
}

export default App;
