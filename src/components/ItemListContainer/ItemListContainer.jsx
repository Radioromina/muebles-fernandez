import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import "./ItemListContainer.css"
import Container from 'react-bootstrap/esm/Container'
import productosJSON from  "../../assets/data/productos.json"
import {useParams} from "react-router-dom"


export default function ItemListContainer() {

  const [items, setItems] = useState([])

  const {categoria} = useParams()

  useEffect(() => {
    let {productos} = productosJSON
      new Promise((resolve, reject)=>{
        setTimeout(() => {
          productos = categoria ? productos.filter(el=>el.categoria === categoria): productos
          resolve(productos)
        }, 2000);
      })
      
      
      .then((data)=> setItems(data))
      .then(error=> console.log(error))
      .finally(()=> console.log("promesa finalizada"))
      
      return () => {
        
      }
    }, [categoria])
    
    return (
      <>
    
      <Container>
        {items.length < 1 ? (<h2>cargando...</h2>) : (<ItemList items={items}/>)}
      </Container>
      
    </>
  )
}
