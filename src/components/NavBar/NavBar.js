import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <nav>
            <h3>Diente de Leon Imagen</h3>
            <div>
                <button>Tejidos</button>
                <button>Atrapasueños</button>
                <button>Juegos</button>
            </div>
            <CartWidget />
        </nav>
    )
 }
 export default NavBar