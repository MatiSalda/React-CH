import "../../App.css";
import ItemCount from "../itemCount";
import Items from "../items";
import listaProductos from '../baseDatos'
import fetchDB from '../fetchDB';
import { useState,useEffect } from 'react';

const ItemListContainer = () => {
    
    const [total, setTotal] = useState(0);

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
        fetchDB(2000,listaProductos)
        .then(result => setData(result))
        .catch(error => console.log(error))      
    }, []);


    return(
        <div>
        <Items
          data={data}    
        />
        <ItemCount
          sumar={sumar}
          restar={restar}
          total={total}
          alerta={addOn}        
        />
          
       
        </div>
    )
}

export default ItemListContainer 