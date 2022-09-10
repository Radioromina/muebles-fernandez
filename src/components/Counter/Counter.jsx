import React, {useState} from 'react'
import Container from 'react-bootstrap/esm/Container'
import "./Counter.css"

const Counter = ({stock, initial, onAdd}) => {

  const [counter, setCounter] = useState (initial) 

  function Sumar(){
    if(counter < stock) setCounter(counter + 1)
  }

  function Restar(){
    if(counter > initial) setCounter(counter - 1)
  }


  return (
    <Container >
        <button className='buttons button btn' onClick={Restar}>-</button>
        <span>{counter}</span>
        <button className='buttons button btn' onClick={Sumar}>+</button>
        <div>
          <button className='buttons button btn' onClick={()=>onAdd(counter)}>Agregar al Carrito</button>
        </div>    
    </Container>
  )
}

export default Counter