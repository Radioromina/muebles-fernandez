import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../context/CartContext'
import {Container} from "react-bootstrap"
import CartItems from '../CartItems/CartItems'
import "./Cart.css"
import { Link } from 'react-router-dom'
import Formulario from "../Formulario/Formulario"
const Cart = () => {
    const { carrito, clearItem, precioFinal} = useContext(GlobalContext)

    return (
      <Container>
        {
          carrito.length > 0 ?
          (<>
          <h2 className="carrito">Tu Carrito compras</h2>
          <div>
            {carrito.map((item, index)=><CartItems key={index} pictureUrl={item.pictureUrl} price={item.price} item={item} quantity={item.quantity} id={item.id} title={item.title} />)}
          </div>
          <div className="d-flex justify-content-around m-5">
            <button className='button btn btn-vaciar' onClick={clearItem}>Vaciar Carrito</button>
            <div className="d-flex align-items-center">
              <h2>Precio final: ${precioFinal}</h2>
            </div>
          </div>
          <div>
            <Formulario></Formulario>
          </div>
          </>)
          : (
          <div className='volver'>
            <h2 className="carrito">Tu carrito esta vacio</h2>
            <div>
              <Link to="/productos">
                <button className='button btn fs-3'>Volver a la tienda</button>
              </Link>
            </div>
          </div>
          )
        }
      </Container>
    )
}

export default Cart