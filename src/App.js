
import './App.css';
import Navbar from './components/navbar'
import ItemListContainer from './components/itemListContainer';

function App() {
  return (
    <div className="App">
    <Navbar />
    <ItemListContainer name="Tienda M proximamente"/>
    </div>
  );
}

export default App;
