import '../App.css';
import { useState } from 'react';

const ItemCount = ({alerta,data,initial}) => {

    const [total, setTotal] = useState(initial);
    const restar = () => {
        if (total <=0) {
            
        }else setTotal(total-1);
    }
    const sumar = () => {
        if (total < data.stock){

            setTotal(total + 1);
        }
    }

    const agregarCarrito = () => {
        if(total !==0) {
            alert(`se agrego ${total} ${data.nombre}`)
            setTotal(1)
            alerta(total)
        }else {
            alert('Necesita al menos 1 producto para agregar al carrito ')
        }

        
    }

    return (
        <div className='botonesContadorCarrito'>
        <div className='divContador'>
<div onClick={restar} className='btnRestar'></div>
<p  className='btnCantidad'> {total} </p>
<div onClick={sumar} className='btnSumar'></div>
        
        </div>
        <button className='btnAgregarCarrito' onClick={agregarCarrito} >Agregar al carrito</button>
        </div>
    )
}

export default ItemCount 