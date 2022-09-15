import "../App.css";
import ItemCount from "./itemCount";
import { useState } from 'react';
import Items from "./items";

const ItemListContainer = () => {
    
    
    return(
        <div>
        <Items/>
        <ItemCount>
        </ItemCount>
        </div>
    )
}

export default ItemListContainer 