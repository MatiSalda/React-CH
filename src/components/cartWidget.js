import '../App.css';
import { useContext } from "react"
import { CartContext } from './cartContext';

const CartWidget = () => {
const {cartList} = useContext(CartContext)
    return (
        <>
        {cartList.length === 0 ? <div></div> :
            <div className="containerCartWidget">
            <div className="iconCart" >
                <p className="numberCart">{cartList.length}</p>
            </div>
        </div>}
        </>
    )
}

export default CartWidget;