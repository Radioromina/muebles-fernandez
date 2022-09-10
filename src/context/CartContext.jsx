import React from 'react'
import { createContext,useState } from 'react'


export const GlobalContext = createContext()

const CartContext = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const addItem = (item,quantity)=>{

        if(isInCart(item.id)){

            let aux = carrito
            let itemIdex = aux.findIndex(el=>el.id === item.id)
            aux[itemIdex]["quantity"] += quantity 
            setCarrito([...aux])
            console.log("duplicado")
        }else{
            setCarrito([...carrito, {...item, quantity}])
            console.log("no duplicado")
        }

    }


    const isInCart = (itemId)=> carrito.find(el=>el.id === itemId)

    const clearItem = ()=>{
        setCarrito([])
    }

    const deleteItem = (itemId)=>{ setCarrito(carrito.filter(el=>el.id !== itemId))}

    let precioFinal = carrito.reduce((acc, item)=>acc + item.price * item.quantity, 0)

    let cartWidget = carrito.length

  return (
    <GlobalContext.Provider value={{
        carrito,
        precioFinal,
        addItem,
        clearItem,
        deleteItem,
        cartWidget
        
    }}>{children}</GlobalContext.Provider>
  )
}

export default CartContext