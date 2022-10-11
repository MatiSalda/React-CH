import '../App.css';
import { useContext } from "react"
import { CartContext } from './cartContext';

const CartWidget = () => {
const {cartList,cantItems} = useContext(CartContext)
    return (
        <>
        {cartList.length === 0 ? <div></div> :
            <div className="containerCartWidget">

            <div className="iconCart" >
                <img src="https://img.icons8.com/material-outlined/24/ffffff/shopping-cart--v1.png" alt="img" />
                <p className="numberCart">{cantItems()}</p>
            </div>
        </div>}
        </>
    )
}

export default CartWidget;