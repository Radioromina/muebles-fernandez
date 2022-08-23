import React, {useState} from 'react'
import Button from 'react-bootstrap/esm/Button'
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
        <Button className='buttons' onClick={Sumar}>+</Button>
        <span>{counter}</span>
        <Button className='buttons' onClick={Restar}>-</Button>
        <div>
          <Button className='button' onClick={()=>onAdd(counter)}>Agregar al Carrito</Button>
        </div>

    
    </Container>
  )
}

export default Counter