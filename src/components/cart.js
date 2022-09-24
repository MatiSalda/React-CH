import {CartContext } from "./cartContext"
import { useContext } from "react"
const Cart = () => {
    const {cartList,clear,removeItem} = useContext(CartContext);
    return (
        <>
        <p>Carrito</p>
            <button onClick={clear}>Borrar todo</button>
        <div className="containerCarrito">

            
            {
            cartList.map(item => 
            <div className="cajaCarrito">
                <div className="nombreProducto">{item.nombre}</div>
                    <div className="imagenProductoCarrito">
                    <img  src={item.imagen}></img>
                    </div>
                <div className="nombreProducto">${item.precio}</div>
                <button onClick={()=> removeItem(item.id)}>algo</button>


            </div>)

          
            }

        </div>
        </>

    )
}

export default Cart