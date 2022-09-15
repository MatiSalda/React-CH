import '../App.css';

const Item = ({nombre,stock,img,precio}) => {
    return(
        <div className='card'>
    <h1 className='tituloCard'>{nombre}</h1>
    <img className='imgCard' src={img}></img>
    <div className='containerInfoCard'>
    <p className='infoCard'>{stock}</p>
    <p className='infoCard'>${precio}</p>
    </div>
        </div>
    )
}  

export default Item