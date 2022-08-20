import React from 'react'
import Item from '../Item/Item'

const ItemList = ({items}) => {
  return (
    <>
        {
            items.map((item, index)=> <Item id={item.id} price={item.price} title={item.title} pictureUrl={item.pictureUrl} key={index}></Item>)
        }
    </>
  )
}

export default ItemList