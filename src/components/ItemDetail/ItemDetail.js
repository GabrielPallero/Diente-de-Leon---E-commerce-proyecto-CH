import { useState } from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';

const ItemDetail = ({id, name, img,category,description, price, stock}) =>{
    const [quantityAdded, setquantityAdded] = useState (0)

    const handleOnAdd=(quantity)=>{
        setquantityAdded(quantity)
    }
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
        <picture>
            <img src={img} alt={name} className="ItemImg"/>
        </picture>
        <section>
            <p className="Info">
                Categoria: {category}
            </p>
            <p className="Info">
                Descripcion: {description}
            </p>
            <p className="Info">
               Precio ${price}
            </p>
          
        </section>
        <footer className="ItemFooter"> 
       { 
        quantityAdded > 0 ? ( <ItemCount initial={1} stock ={stock} onAdd={handleOnAdd}/>
            
        ) :( 
            <Link to='../Cart' className='OptionEnd'>Terminar Compra</Link>
       )}
        </footer>
        </article>
    )
}
export default ItemDetail