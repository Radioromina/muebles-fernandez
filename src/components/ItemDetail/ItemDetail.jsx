import React, {useState} from 'react'
import { useContext } from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/CartContext'
import Counter from "../Counter/Counter"
import "./ItemDetail.css"

const ItemDetail = ({item}) => {

  const {addItem} = useContext(GlobalContext)

  const {id, title, price, description, pictureUrl, altImg} = item
  const [counter, setCounter] = useState (0)
  function onAdd(quantity){
    setCounter(quantity)
    
    addItem(item, quantity)

  }



  
  return (
    <div>

    <Container className="pt-5">
      <div className='row'>
        <img className='img-detail' src={pictureUrl} alt={altImg}></img>
        <div className='col-6'>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>Precio: ${price}</p>
          <p>ID: {id}</p>
          {
            counter !== 0 ? 
            (<Link to="/cart">
              <Button>Finalizar Compra</Button>
            </Link>):
          (<Counter item={item} quantity={item.quantity}  stock={item.stock} initial={1} onAdd={onAdd}/>)
          }
        </div>
      </div>
    </Container>
    </div>
  )
}

export default ItemDetail