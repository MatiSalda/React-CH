
import './App.css';
import Navbar from './components/navbar'
import ItemListContainer from './components/containers/itemListContainer'
import ItemDetailContainer from './components/containers/itemDetailContainer'

function App() {
  return (
    <div className="App">
    <Navbar />
    {/* <ItemListContainer name="Tienda M proximamente"/> */}
    <ItemDetailContainer />
    </div>
  );
}

export default App;
