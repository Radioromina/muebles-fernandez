import React from 'react'
import { Container } from 'react-bootstrap'
import Counter from "../Counter/Counter"
import "./ItemDetail.css"

const ItemDetail = ({item}) => {

  function onAdd(counter){
    console.log("agregaste", counter, "al carro")
  }


  const {title, price, description, pictureUrl, id, altImg} = item

  
  return (
    <Container className="pt-5">
      <div className='row'>
        <img className='img-detail' src={pictureUrl} alt={altImg}></img>
        <div className='col-6'>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>Precio: ${price}</p>
          <p>ID: {id}</p>
          <Counter stock={5} initial={1} onAdd={onAdd}/>
        </div>
      </div>
    </Container>
  )
}

export default ItemDetail