import React from 'react'
import Item from '../Item/Item'
import Container from 'react-bootstrap/esm/Container'
const ItemList = ({items}) => {
  return (

    <Container className='d-flex m-5 flex-wrap'>

    {
      items.map((item, index)=> <Item id={item.id} price={item.price} title={item.title} pictureUrl={item.pictureUrl} key={index}></Item>)
    }
    </Container>
    
  )
}

export default ItemList