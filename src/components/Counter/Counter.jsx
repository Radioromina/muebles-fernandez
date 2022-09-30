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
    <Container className='pt-5'>
        <button className='buttons button btn fs-3' onClick={Restar}>-</button>
        <span>{counter}</span>
        <button className='buttons button btn fs-3' onClick={Sumar}>+</button>
        <div className='pt-4'>
          <button className='buttons button btn fs-3 ' onClick={()=>onAdd(counter)}>Agregar al Carrito</button>
        </div>    
    </Container>
  )
}

export default Counter