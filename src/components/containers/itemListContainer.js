import "../../App.css";
import ItemCount from "../itemCount";
import Items from "../items";
import listaProductos from '../baseDatos'
import fetchDB from '../fetchDB';
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import { collection } from "firebase/firestore";
import { getDocs} from "firebase/firestore";


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
        
        const firestoreFetch = async() =>{
      const querySnapshot = await getDocs(collection(db, "productos"))
      const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
      }))
     return dataFromFirestore
    }
    firestoreFetch()
        .then(result => setData(result))

    }, [data]);
    return(
        <div>
        {cargando ?  <div className='containerCargando'><h1 className='cargando'>Cargando..</h1></div> : <Items
          data={data}/>      
        
       
         }
       
        </div>
    )
}

export default ItemListContainer 