import React from 'react'
import { useEffect, useState } from 'react'
import Counter from '../Counter/Counter'
import ItemList from '../ItemList/ItemList'
import "./ItemListContainer.css"
import Container from 'react-bootstrap/esm/Container'

export default function ItemListContainer({greeting}) {
  function onAdd(counter){
    console.log("Has agregado", counter, "unidades al carrito")
  }

  

  const [items, setItems] = useState([])

  useEffect(() => {
  
    const productos = [
      {
        title: "Escritorio industrial",
        price: 8500,
        description: "el mejor escritorio",
        pictureUrl: "../../../public/img/mesa1.jpg",
        id: 1000 
      },
      {
        title: "Silla Profesional",
        price: 11500,
        description: "la mejor silla",
        pictureUrl: "../../../public/img/silla1.jpg",
        id: 2000 
      }
    ]


      new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve(productos)
      }, 2000);
    })
  
    
      .then((data)=> setItems(data))
      .then(error=> console.log(error))
      .finally(()=> console.log("promesa finalizada"))
  
    return () => {
      
    }
  }, [])

  return (
    <>
      <div className='p-5 fs-1'>{greeting}</div>
      <Counter stock={5} initial={1} onAdd={onAdd}/>
      <Container>
        {items.length < 1 ? (<h1>cargando...</h1>) : (<ItemList items={items}/>)}
      </Container>
    </>
  )
}
