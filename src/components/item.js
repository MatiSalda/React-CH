import '../App.css';
import { Link } from 'react-router-dom';
const Item = ({nombre,stock,img,precio,id}) => {
    return(
        <div className='card'>
    <h1 className='tituloCard'>{nombre}</h1>
    <img className='imgCard' src={img} alt="img"></img>
    <div className='containerInfoCard'>
    <p className='infoCard'>Stock:{stock}</p>
    <p className='infoCard'>${precio}</p>
    </div>
   <Link to={"/item/"+ id}> <p className='infoCardDetail'>ver detalles</p></Link>
        </div>
    )
}  

export default Item