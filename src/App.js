
import './App.css';
import Navbar from './components/navbar'
import ItemListContainer from './components/containers/itemListContainer'
import ItemDetailContainer from './components/containers/itemDetailContainer'
import Cart from './components/cart'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import CartContextProvider from './components/cartContext';
function App() {
  return (

    <CartContextProvider>
    <BrowserRouter>
    <div className="App">

    <Navbar />
    <Routes>
      <Route path='/item/:id' element={<ItemDetailContainer />}/>
      <Route path='/category/:id' element={<ItemListContainer/>}/>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>

    </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
