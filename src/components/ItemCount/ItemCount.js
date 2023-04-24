import {useState} from 'react' 

const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState (initial)

    const agregar =() => {
        if (contador<stock){  
            setContador(contador+1)

        }
    }
    
    const quitar = () => {
        if (contador>1){
            setContador(contador-1)
        } 

    }
    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className='Button' onClick={quitar}>-</button>
                <h4 className='Number'>{contador}</h4>
                <button className='Button' onClick={agregar}>+</button>
            </div>
            <div>
            <button className='Button1' onClick={onAdd(contador)} disabled={!stock}>
                Añadir al carrito
            </button>
            </div>
        </div>
    )
}
export default ItemCount;