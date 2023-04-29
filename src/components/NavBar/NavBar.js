import CartWidget from '../CartWidget/CartWidget';
import img from '../imagenes/diente_de_leon_logo.jpg';
import { NavLink, Link } from 'react-router-dom';
const NavBar = () => {
    return(
        <nav className='NavBar'>
            <Link to= '/'> 
               <img src={img} alt="logo" id="logo"/>
            </Link>
            <div className='Categorias'>
            <NavLink to={'/'} className={({isActive}) => isActive ? 'ActiveOption': 'Option'}>Inicio</NavLink>
            <NavLink to={`/category/tejidos`} className={({isActive}) => isActive ? 'ActiveOption': 'Option'}>Tejidos</NavLink>
            <NavLink to={`/category/bufandas`} className={({isActive}) => isActive ? 'ActiveOption': 'Option'}>Bufandas</NavLink>
            <NavLink to={`/category/gorros`} className={({isActive}) => isActive ? 'ActiveOption': 'Option'}>Gorros</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
 }
 export default NavBar;