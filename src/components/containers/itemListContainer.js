import "../../App.css";
import ItemCount from "../itemCount";
import Items from "../items";
import listaProductos from '../baseDatos'
import fetchDB from '../fetchDB';
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const [cargando,setCargando] = useState(false);
    const [total, setTotal] = useState(0);
    const {id} = useParams();

    const addOn = () => {
        console.log(addOn)
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

    const [data, setData] = useState([])
    useEffect(() => {
        if(id){
            setCargando(true)
        fetchDB(2000,listaProductos.filter(item=> item.categoryId == id))
        .then(result => setData(result))
        .catch(error => console.log(error))  
        .finally(()=>setCargando(false))    
        } else {
            setCargando(true)
            fetchDB(2000,listaProductos)
            .then(result => setData(result))
            .catch(error => console.log(error))  
            .finally(()=>setCargando(false))   
            }
    }, [id]);
    return(
        <div>
        {cargando ?  <div className='containerCargando'><h1 className='cargando'>Cargando..</h1></div> : <Items
          data={data}/>      
        
       
         }
       
        </div>
    )
}

export default ItemListContainer 