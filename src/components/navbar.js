import '../App.css';
import CartWidget from './cartWidget';
const Navbar = () => {
    return (
      
       <header className='header'>
        <div className='contenedorLogo'>
          <h1 className='logo'>𝗞𝗠𝗗</h1>
          {/* <img src="https://img.icons8.com/ios/50/ffffff/medium-new.png"/> */}
        </div>
       
        <div className='navbar'>
          <ul className='ulNav'>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Preguntas</a></li>
            <li><a href="#">Otro</a></li>
            </ul>         
        </div>
        <CartWidget/>
       </header>
      
    );
  }

  export default Navbar;