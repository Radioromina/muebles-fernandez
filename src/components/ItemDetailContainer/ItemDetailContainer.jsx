import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import db from '../../services'
import { getDocs, collection} from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    const {id} = useParams()

    useEffect(() => {
        const getColData = async () => {
          try {
            const data = collection (db,"productos");
            const col = await getDocs (data);
            const res = col.docs.map((doc)=>doc = {id:doc.id, ...doc.data()})
            const res2 = res.find((el)=>el.id === id)
            console.log(res)
            setItem(res2)
          } catch (error){
            console.log(error)
          }
    
        }
      getColData()

      return () => {
      
    };
  }, [id])
    



    return (
        <>
            <ItemDetail item={item}/>
        </>

    )
}

export default ItemDetailContainer