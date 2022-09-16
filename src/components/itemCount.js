import '../App.css';

const ItemCount = ({restar,sumar,total,alerta}) => {
  
    return (
        <div className='botonesContadorCarrito'>
        <div className='divContador'>
<div onClick={restar} className='btnRestar'></div>
<p  className='btnCantidad'>{total} </p>
<div onClick={sumar} className='btnSumar'></div>
        
        </div>
        <button onClick={alerta} className='btnAgregarCarrito'>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount 