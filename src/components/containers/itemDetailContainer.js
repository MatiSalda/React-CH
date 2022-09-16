import '../../App.css'
import ItemDetail from '../itemDetail.js'
import fetchDB from '../fetchDB';
import listaProductos from '../baseDatos'
import  { useState, useEffect } from 'react';




const ItemDetailContainer = () => {
    
    const [data, setData] = useState({})
    const [cargando,setCargando] = useState(false)

useEffect(() => {
    setCargando(true)
    fetchDB(2000,listaProductos[1])
    .then(result => setData(result))
    .catch(error => console.log(error))
    .finally(()=>setCargando(false))      
}, []);




    return(
        <div>
        
        {cargando ? <div className='containerCargando'><h1 className='cargando'>Cargando..</h1></div> :<ItemDetail
        data={data}
        />}
        
        </div>
    )
}

export default ItemDetailContainer