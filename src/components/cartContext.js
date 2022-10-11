import { createContext, useState } from "react";


export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cartList, setCartList ] = useState([])

    const addItem = (producto,cantidad) => {
       if(!isInCart(producto.id)) {
       producto.cantidadSelec = cantidad
       setCartList([
        ...cartList,producto
       ])
        } else {
            producto.cantidadSelec += cantidad       }
    }

    const isInCart = (id) => cartList.find(product => product.id === parseInt(id)) ? true : false; 

    const clear = () => {
        setCartList([])
    }


    const removeItem = (id) => { 
        return setCartList(cartList.filter((item) => item !== id)) }
    
        const precioTotal = () => {
            let index = cartList.map(item => item.precio * item.cantidadSelec)
            return index.reduce((valorPrevio, valorActual) => valorPrevio + valorActual, 0)
        
    }

    const cantItems = () => {
        let index = cartList.map(item => item.cantidadSelec)
        return index.reduce((valorPrevio, valorActual) => valorPrevio + valorActual, 0)
    }

    return(
        <CartContext.Provider value={{cartList,addItem, clear,removeItem,isInCart,precioTotal,cantItems}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider 