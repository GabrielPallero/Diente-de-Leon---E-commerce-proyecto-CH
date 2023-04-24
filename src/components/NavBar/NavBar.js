import CartWidget from '../CartWidget/CartWidget';
import img from '../imagenes/diente_de_leon_logo.jpg';
const NavBar = () => {
    return(
        <nav>
               <img src={img} alt="logo" id="logo"/>
            
            <div>
                <button>Inicio</button>
                <button>Accesorios</button>
                <button>Prendas de vestir</button>
                <button>Deco</button>
            </div>
            <CartWidget />
        </nav>
    )
 }
 export default NavBar;