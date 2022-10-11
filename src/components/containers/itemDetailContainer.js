import '../../App.css'
import ItemDetail from '../itemDetail.js'
import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebaseConfig';

const ItemDetailContainer = () => {
    
    const [data, setData] = useState({})
    const [cargando,setCargando] = useState(false)
    const {id} = useParams()
useEffect(() => {
    setCargando(true)
const fetchProducto = async() => {
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);
    setData(docSnap.data())
    setCargando(false)
}
fetchProducto()

    // if(id){
    //     setCargando(true)
    //     fetchDB(2000,listaProductos.find(item => item.id == id))
    //     .then(result => setData(result))
    //     .catch(error => console.log(error))
    //     .finally(()=>setCargando(false)) 
    // } else {
    //     console.log("no funca")
    // }
}, [id]);



    return(
        <div>       
        {cargando ? <div className='containerCargando'><h1 className='cargando'>Cargando..</h1></div> :<ItemDetail
        data={data}
        />}        
        </div>
    )
}

export default ItemDetailContainer