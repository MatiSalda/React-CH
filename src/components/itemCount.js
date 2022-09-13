import '../App.css';
import { useState } from 'react';

const ItemCount = () => {
    const [total, setTotal] = useState(0);

    const alerta = () => {
        alert(`Agregaste ${total} productos`)
        }
    const restar = () => {
        if (total <=0) {
            
        }else setTotal(total-1);
    }
    const sumar = () => {
        if (total < 5)
        setTotal(total+1);
        
    }

    return (
        <div className='botonesContadorCarrito'>
        <div className='divContador'>
<button onClick={restar} className='btnRestar'></button>
<p  id='cola' className='btnCantidad'>{total} </p>
<button onClick={sumar} className='btnSumar'></button>
        
        </div>
        <button onClick={alerta} className='btnAgregarCarrito'>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount 