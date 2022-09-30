import {CartContext } from "./cartContext"
import { useContext } from "react"
import { Link } from 'react-router-dom';
import { doc, serverTimestamp, setDoc,collection} from "firebase/firestore";
import { db } from "./firebaseConfig";
const Cart = () => {
    const {cartList,clear,removeItem} = useContext(CartContext);
    const crearOrden = async () => {
        let productoDb = cartList.map(item => ({
            id: item.id,
            precio : item.precio,
            nombre: item.nombre
        }))
        let orden = {
            
            comprador: {
                nombre: "Lionel",
                apellido: "Meeessi",
                telefono: "1132899651"
            },
            date:{
                date: serverTimestamp()
            },
            items: productoDb
        }
        const nuevaOrdenRef = doc(collection (db,"orenes"))
        await setDoc(nuevaOrdenRef,orden)
        alert(`Su compra finalizó con exito, esta es su orden de compra: ${nuevaOrdenRef.id}`)
}
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


            <div className="desgloseCarrito">
                <h3>Total:</h3>
                <p>x Productos</p>
                <button className="borrarTodo" onClick={crearOrden}>Finalizar compra</button>
            </div>
        
        </>

    )
}

export default Cart