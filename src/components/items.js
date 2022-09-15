import '../App.css';
import Item from './item';
import {useEffect, useState} from 'react'
import listaProductos from './baseDatos'
import fetchDB from './fetchDB';
const Items = () => {

const [data, setData] = useState([])
    useEffect(() => {
        fetchDB(2000,listaProductos)
        .then(result => setData(result))
        .catch(error => console.log(error))      
    }, []);


    return(
        <div className='containerProductos'>
       {
        data.map(item => (
            <Item 
            key={item.id}
            stock={item.stock}
            nombre={item.nombre}
            img={item.imagen}
            precio={item.precio}
            />
        ))
       }
          
        
        </div>
    
    )
}

export default Items