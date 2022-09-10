import React, {useState} from 'react'
import { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/CartContext'
import Counter from "../Counter/Counter"
import "./ItemDetail.css"

const ItemDetail = ({item}) => {

  const {addItem} = useContext(GlobalContext)

  const {id, title, price, description, pictureUrl, altImg,stock } = item
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
            (<>
            
            <Link to="/cart">
              <button className='button btn'>Finalizar Compra</button>
            </Link>
            <Link to="/productos">
              <button className='button btn'>Volver a la tienda</button>
              </Link>
            </>
            ):
          (<Counter item={item}  stock={stock} initial={1} onAdd={onAdd}/>)
          }
        </div>
      </div>
    </Container>
    </div>
  )
}

export default ItemDetail