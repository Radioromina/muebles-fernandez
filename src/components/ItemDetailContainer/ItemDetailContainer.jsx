import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import productosJSON from "../../assets/data/productos.json"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    const {id} = useParams()

    useEffect(() => {
        
        const {productos} = productosJSON

        new Promise((resolve)=>{
            setTimeout(() => {
                resolve(productos.find(el=>Number(el.id) === Number(id)))
            }, 2000);


        }).then(data=>setItem(data))
    
      
    }, [id])
    



    return (
        <>
            <ItemDetail item={item}/>
        </>

    )
}

export default ItemDetailContainer