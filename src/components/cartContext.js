import { createContext, useState } from "react";
import Item from "./item";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cartList, setCartList ] = useState([])

    const addItem = (producto,cantidad) => {
       if(isInCart(producto.id)) {
        setCartList(cartList.map(product => {
            return product.id === producto.id ? {
                ...product, cantidad : product.cantidad + cantidad}  : producto
        
        }))
       } else {
            setCartList([...cartList, {...producto, cantidad}])
       }
    }

    const isInCart = (id) => cartList.find(product => product.id === parseInt(id)) ? true : false; 

    const clear = () => {
        setCartList([])
    }


    const removeItem = (id) => setCartList(cartList.filter((product) => product.id !==id));


    return(
        <CartContext.Provider value={{cartList,addItem, clear,removeItem,isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider 