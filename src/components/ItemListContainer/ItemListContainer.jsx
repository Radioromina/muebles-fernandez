import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import "./ItemListContainer.css"
import Container from 'react-bootstrap/esm/Container'
import {useParams} from "react-router-dom"
import db from '../../services'
import { getDocs, collection} from 'firebase/firestore'
import  Spinner  from '../Spinner/Spinner'


export default function ItemListContainer() {

  const [items, setItems] = useState([])

  const {categoria} = useParams()

  useEffect(() => {
    const getColData = async () => {
      try {
        const data = collection(db,"productos");
        const col = await getDocs(data);
        const res = col.docs.map((doc)=>doc = {id:doc.id, ...doc.data()})
        const res2 = categoria ? res.filter(el=> el.categoria === categoria) : res
        setItems(res2)
      } catch (error){
        console.log(error)
      }

    }
  getColData()


    
    return () => {
      
    };
  }, [categoria])

      return (
      <>
    
      <Container>
        {items.length < 1 ? (<Spinner/>) : (<ItemList items={items}/>)}
      </Container>
      
    </>
  )
}
