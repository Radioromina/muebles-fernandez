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
        price: 29000,
        description: "Escritorio industrial de color negro",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_687019-MLA50310039834_062022-W.webp" ,
        id: 1000
      },
      {
        title: "Escritorio industrial",
        price: 29000,
        description: "Escritorio industrial de color blanco",
        pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/623/421/products/lightroom-271-dd0a7163287aee6b8b16199500805582-1024-1024.jpg" ,
        id: 1050
      },
      {
        title: "Escritorio industrial",
        price: 11500,
        description: "Escritorio industrial de color blanco",
        pictureUrl: "https://d22fxaf9t8d39k.cloudfront.net/584cab0143b5b50c36168a9dd84e28581f150b4e75aa8a8eb09ebc4a772f743337896.jpeg",
        id: 2000 
      },
      {
        title: "Escritorio industrial",
        price: 25600,
        description: "",
        pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_787361-MLA49283404380_032022-W.webp",
        id:3000
      },
      {
        title: "Escritorio Industrial",
        price: 28890,
        description:"Mesa Pc Industrial Hierro Y Madera + Bandeja Teclado 100x50",
        pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_776555-MLA49307244570_032022-O.webp",
        id: 4000
      },
      {
        title: "Silla de Escritorio",
        price: 20000,
        description:"Silla para escritorio de malla, giratoria 360º, con soporte lumbar ajustable, y con apoyacabezas y apoyabrazos.",
        pictureUrl:"https://i.blogs.es/f7e949/81v6i48cqsl._ac_sl1500_/1366_2000.jpeg",
        id: 5000
      },
      {
        title: "Silla de Escritorio",
        price: 25000,
        description:"Silla de oficina giratoria de malla y con soporte lumbar transpirable, es ajustable, cuenta con mecanismos de inclinación, y cuenta además con un reposapiés que se puede extender para que puedas reclinarte.",
        pictureUrl:"https://i.blogs.es/85a761/71p-jmyauyl._ac_sl1500_/1366_2000.jpeg",
        id: 6000
      },
        {
          title: "Silla de Escritorio",
          price: 30000,
          description:"Cuenta con cuero de PU extra suave y grueso, con espuma fría recién moldeada al 55% de densidad para una óptima transpirabilidad y comodidad.",
          pictureUrl:"https://i.blogs.es/91c1d3/71yufl-tajl._ac_sl1500_/1366_2000.jpeg",
          id: 7000
        },
        {
          title: "Silla de Escritorio",
          price: 22900,
          description:"Silla De Escritorio Fresa Neumática Negra",
          pictureUrl:"https://piccolorossi.com/wp-content/uploads/2022/05/2.-Silla-escritorio-Fresa-negra.jpg",
          id: 8000
        },
        
        
        
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
      <Container className='d-flex flex-wrap'>

      <div className='p-5 fs-1'>{greeting}</div>
      <Counter stock={5} initial={1} onAdd={onAdd}/>
      <Container>
        {items.length < 1 ? (<h1>cargando...</h1>) : (<ItemList items={items}/>)}
      </Container>
      </Container>
    </>
  )
}
