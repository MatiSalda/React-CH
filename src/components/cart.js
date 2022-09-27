import {CartContext } from "./cartContext"
import { useContext } from "react"
import { Link } from 'react-router-dom';

const Cart = () => {
    const {cartList,clear,removeItem} = useContext(CartContext);
    
    return (
        <>
        {cartList.length === 0 
        ?
         <div className="carritoVacioContainer">
            <h1 className="carritoVacio">Carrito Vacio</h1>  
            <Link to="/"><button className="borrarTodo">Volver a la Tienda</button></Link>
         </div> 
        :
         <div className="carritoTitulo"><p>Carrito</p>
            <button className="borrarTodo" onClick={clear}>Borrar todo</button>
         </div>
        }


            {cartList.length === 0
             ? 
            <div></div>
            :
            <div className="containerCarrito">
                {cartList.map(item => 
                <div className="cajaCarrito">
                    <div className="nombreProducto">{item.nombre}</div>
                        <div className="imagenProductoCarrito">
                            <img  src={item.imagen}></img>
                        </div>
                    <div className="nombreProducto">${item.precio}</div>
                    <button className="borrarProducto" onClick={()=> removeItem(item.id)}>Borrar producto</button>
                    
                </div>)
                }
            </div>}
        
        </>

    )
}

export default Cart