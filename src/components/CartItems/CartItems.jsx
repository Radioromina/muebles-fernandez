import React, {useContext} from 'react'
import { GlobalContext } from '../../context/CartContext'
import { Container} from "react-bootstrap"
import contenedor from "../../assets/img/trash-fill.svg"
import "./CartItems.css"

const CartItems = ({title, price, quantity, id, item, pictureUrl, stock }) => {

    const {deleteItem} = useContext(GlobalContext)

    return (
        <div className='border-bottom mb-3 mt-5'>
            <div className='cart row align-items-center justify-content-center pt-2 mb-3'>
                <img className='col p-4 cart' src={pictureUrl} alt={title}></img>
                <h3 className='col ms-5 text-align-center pt-3'>{title}</h3>
                <p className='col cantidad text-align-center pt-3'>Precio: ${price}</p>
                <Container className='row col'>
                    <p className='col cantidad'>Cantidad:</p>
                    <p className='col '>{quantity}</p>
                    <button className='button-trash col btn' type="button" onClick={()=>deleteItem(id)}><img alt="tacho" src={contenedor}></img></button>
                </Container>
            </div>
        </div>
    )
}

export default CartItems