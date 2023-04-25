import { useState, useEffect } from "react";
import { getProductos } from "../../asyncMoock";
import ItemList from "../../ItemList/ItemList";

const ItemListContainer = ({greeting}) => {
    const [productos,setProductos] = useState([])

    useEffect(()=>{
        getProductos()
        .then(response =>{setProductos(response)})
        .catch(error=>{console.error(error)})
    },[])
    return(
        <div>
            <h1 id="saludo">{greeting}</h1>
            <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer;