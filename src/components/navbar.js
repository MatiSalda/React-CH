import '../App.css';
const Navbar = () => {
    return (
      
       <header className='header'>
        <div className='contenedorLogo'>
          <img src="https://img.icons8.com/ios/50/ffffff/medium-new.png"/></div>
       
        <navbar className='navbar'>
          <ul className='ulNav'>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Preguntas</a></li>
            <li><a href="#">Otro</a></li>
            </ul>         
        </navbar>
       </header>
      
    );
  }

  export default Navbar;