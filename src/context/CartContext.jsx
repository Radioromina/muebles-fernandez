import React from 'react'
import { createContext,useState, useEffect } from 'react'


export const GlobalContext = createContext()

const CartContext = ({children}) => {

    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("carrito"))||[])

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])
    

    const addItem = (item,quantity)=>{

        if(isInCart(item.id)){

            let aux = carrito
            let itemIdex = aux.findIndex(el=>el.id === item.id)
            aux[itemIdex]["quantity"] += quantity 
            setCarrito([...aux])
        
        }else{
            setCarrito([...carrito, {...item, quantity}])
            
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
        isInCart,
        clearItem,
        deleteItem,
        cartWidget
        
    }}>{children}</GlobalContext.Provider>
  )
}

export default CartContext