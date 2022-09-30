import React, {useState} from 'react'
import { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/CartContext'
import Counter from "../Counter/Counter"
import "./ItemDetail.css"

const ItemDetail = ({item}) => {

  const {addItem, isInCart} = useContext(GlobalContext)

  const {id, title, price, description, pictureUrl, altImg,stock } = item
  const [counter, setCounter] = useState (0)
  function onAdd(quantity){
    setCounter(quantity)
    
    addItem(item, quantity)

  }



  
  return (
    <div>

    <Container className="pt-5 item-detail">
      <div className='row justify-content-center div-detail'>
        <img className='img-detail img-fluid item-card ' src={pictureUrl} alt={altImg}></img>
        <div className='item'>
          <h2 className='fs-2'>{title}</h2>
          <p className='fs-4 pt-4'>{description}</p>
          <p className='fs-4 pt-4'>Stock Disponible:{stock}</p>
          <p className='fs-4 pt-4'>Precio: ${price}</p>
          {
            stock < 1 ? (
              <Link to="/productos">
                <div className='button btn fs-4'>Lo sentimos, en este momento no tenemos stock...</div>
              </Link>): (isInCart(id) || counter ? 
              (
                <div> 
                  <Link to="/cart">
                  <button className='button btn'>Finalizar Compra</button>
                </Link>
                <Link to="/productos">
                  <button className='button btn'>Volver a la tienda</button>
                </Link>
                </div>
              ) :
              (<Counter item={item} stock={stock} initial={1} onAdd={onAdd}/>))
          }
          
        </div>
      </div>
    </Container>
    </div>
  )
}

export default ItemDetail