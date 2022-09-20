import '../App.css'
import ItemCount from './itemCount.js'
import { useState } from 'react';

const ItemDetail = ({data}) => {
    const [total, setTotal] = useState(0);
    const addOn = () => {
        alert(`Agregaste ${total} ${data.nombre}s`)
        }
    const restar = () => {
        if (total <=0) {
            
        }else setTotal(total-1);
    }
    const sumar = () => {
        if (total < data.stock)
        setTotal(total+1);
    }
   
    return (
        <div className='detailContainer'>
            <div className="fotoDescripcion">
            <h1 className='tituloDetail'>{data.nombre}</h1> 
                <img src={data.imagen}/>
                <ItemCount
                data={data}
                sumar={sumar}
                restar={restar}
                total={total}
                alerta={addOn}        
                /> 
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