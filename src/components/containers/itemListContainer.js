import "../../App.css";
import Items from "../items";
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import { collection, query, where} from "firebase/firestore";
import { getDocs} from "firebase/firestore";
const ItemListContainer = () => {
    const [cargando,setCargando] = useState(false);
    const {id} = useParams();

    const [data, setData] = useState([])
    useEffect(()=>{
        setCargando(true)
        const firestoreFetch = async () => {
            let q 
            if(id) {
                q = query(collection(db, "productos"), where('categoryId', '==', parseInt(id)))
            } else {
                q = query(collection(db, "productos"))
            }

            const querySnapshot = await getDocs(q)
            const dataFromFirestore = querySnapshot.docs.map(document => ({
                id: document.id,
                ...document.data()
            }))
            setCargando(false)
            return dataFromFirestore
        }
        firestoreFetch()
            .then(result => setData(result))
    },[id])
    return(
        <div>
        {cargando ?  <div className='containerCargando'><h1 className='cargando'>Cargando..</h1></div> : <Items
          data={data}/>      
        
       
         }
       
        </div>
    )
}

export default ItemListContainer 