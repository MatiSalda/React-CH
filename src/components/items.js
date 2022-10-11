import '../App.css';
import Item from './item';
const Items = ({data}) => {

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
            id={item.id}
            />
        ))
       }
          
        
        </div>
    
    )
}

export default Items