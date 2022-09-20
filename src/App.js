
import './App.css';
import Navbar from './components/navbar'
import ItemListContainer from './components/containers/itemListContainer'
import ItemDetailContainer from './components/containers/itemDetailContainer'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (

    <BrowserRouter>
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/item/:id' element={<ItemDetailContainer />}/>
      <Route path='/category/:id' element={<ItemListContainer/>}/>
      <Route path='/' element={<ItemListContainer/>}/>
    </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
