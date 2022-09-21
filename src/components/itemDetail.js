import '../App.css'
import ItemCount from './itemCount.js'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({data}) => {
    
    const [itemCount, setItemCount] = useState(0)
    
    const addOn = (total) => {
        setItemCount(total)
    }
   
   
    return (
        <div className='detailContainer'>
            <div className="fotoDescripcion">
            <h1 className='tituloDetail'>{data.nombre}</h1> 
                <img src={data.imagen}/>
                {
                itemCount === 0
                ? 
                <ItemCount
                data={data}
                alerta={addOn}/> 
                
                :  <Link to="/cart" > <button>Chekout</button></Link>
            }
                 
                
            </div>
          <div className='infoDetail'>
            <h3>${data.precio}</h3>
            <h5 className='precioDetail'>Quedan {data.stock} {data.nombre}s disponibles.</h5>  
            <h4 className='descripcionDetail'>{data.desc}</h4>
           </div>
        </div>
    )
}

export default ItemDetail 