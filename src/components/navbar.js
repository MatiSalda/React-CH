import '../App.css';
import CartWidget from './cartWidget';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
      
       <header className='header'>
        <div className='contenedorLogo'>
          <a href='/'>𝗞𝗠𝗗</a>
          {/* <img src="https://img.icons8.com/ios/50/ffffff/medium-new.png"/> */}
        </div>
       
        <div className='navbar'>
          <ul className='ulNav'>
          <Link to="/category/3"><li><p  className='navbarLink' href="#">Buzos</p></li></Link>
          <Link to="/category/2"> <li><p className='navbarLink' href="#">Zapatillas</p></li></Link>
          <Link to="/category/1"><li><p  className='navbarLink' href="#">Remeras</p></li></Link>
            
            </ul>         
        </div>
        <Link to="/cart"> <CartWidget/>  </Link>
       </header>
      
    );
  }

  export default Navbar;