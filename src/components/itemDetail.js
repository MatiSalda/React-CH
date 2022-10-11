import '../App.css'
import ItemCount from './itemCount.js'
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './cartContext';
const ItemDetail = ({data}) => {

    const {addItem} = useContext(CartContext);    
    const [itemCount, setItemCount] = useState(0)
    
    const addOn = (total) => {
        setItemCount(total)
        addItem(data,total)
    }
   
   
    return (
        <div className='detailContainer'>
            <div className="fotoDescripcion">
            <h1 className='tituloDetail'>{data.nombre}</h1> 
                <img src={data.imagen} alt="img"/>
                {
                itemCount === 0
                ? 
                <ItemCount
                initial={itemCount}
                data={data}
                alerta={addOn}/> 
                
                :  <Link to="/cart" > <button className='btnChekOut'>Chekout</button></Link>
            }
                 
                
            </div>
          <div className='infoDetail'>
            <h3>${data.precio}</h3>
            <h5 className='precioDetail'>Quedan {data.stock} {data.nombre}s disponibles.</h5>  
            <h4 className='descripcionDetail'>{data.descripcion}</h4>
           </div>
        </div>
    )
}

export default ItemDetail 