import {CartContext } from "./cartContext"
import { useContext} from "react"
import { Link } from 'react-router-dom';
import { doc, serverTimestamp, setDoc,collection, updateDoc, increment} from "firebase/firestore";
import { db } from "./firebaseConfig";
const Cart = () => {
    const {cartList,clear,removeItem,precioTotal,cantItems} = useContext(CartContext);
    const crearOrden = async () => {
        let productoDb = cartList.map(item => ({
            
            precio : item.precio,
            nombre: item.nombre,
            cantidad: item.cantidadSelec
        }))
       
        let orden = {
            
            comprador: {
                nombre: "Lionel",
                apellido: "Meeessi",
                telefono: "1132899651"
            },
            date:{
                date:serverTimestamp()
            },
            productos: productoDb
            
            
        }
        const nuevaOrdenRef = doc(collection(db,"ordenes"))
        await setDoc(nuevaOrdenRef,orden)

        cartList.forEach(async(item) => {
            const itemRef = doc(db,"productos",item.nombre)
            await updateDoc(itemRef, {
                stock: increment(-item.cantidadSelec)
            })
        })

        alert("su compra finalizó con exito, esta es su orden de compra: "+ nuevaOrdenRef.id)
        clear()
        
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
            <>
            <div className="containerCarrito">
                {cartList.map(item => 
                <div key={item.nombre} className="cajaCarrito">
                    <div className="nombreProducto">{item.nombre}</div>
                        <div className="imagenProductoCarrito">
                            <img  src={item.imagen} alt="imagen"></img>
                        </div>
                    <div className="nombreProducto">total:${item.precio * item.cantidadSelec}</div>
                    <p>Cant:{item.cantidadSelec}</p>
                    <button className="borrarProducto" onClick={()=> removeItem(item)}>Borrar producto</button>
                    
                    </div>
                  )}
            </div>
     <div className="desgloseCarrito">
                <h3>total: ${precioTotal()}</h3>
               <p>cantidad de productos: {cantItems()}</p>
                <button className="borrarTodo" onClick={crearOrden}>Finalizar compra</button>
            </div>
            </>
            }


    
        
           
        </>

    )
}

export default Cart