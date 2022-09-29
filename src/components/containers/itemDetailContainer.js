import '../../App.css'
import ItemDetail from '../itemDetail.js'
import fetchDB from '../fetchDB';
import listaProductos from '../baseDatos'
import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebaseConfig';

const ItemDetailContainer = () => {
    
    const [data, setData] = useState({})
    const [cargando,setCargando] = useState(false)
    const {id} = useParams()
// useEffect(() => {
// const fetchProducto = async() => {
//     const docRef = doc(db, "productos", "buzo1");
//     const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }
// }
// fetchProducto()
// .then(result => setData(result))
//     // if(id){
//     //     setCargando(true)
//     //     fetchDB(2000,listaProductos.find(item => item.id == id))
//     //     .then(result => setData(result))
//     //     .catch(error => console.log(error))
//     //     .finally(()=>setCargando(false)) 
//     // } else {
//     //     console.log("no funca")
//     // }
// }, [data]);



    return(
        <div>       
        {cargando ? <div className='containerCargando'><h1 className='cargando'>Cargando..</h1></div> :<ItemDetail
        data={data}
        />}        
        </div>
    )
}

export default ItemDetailContainer