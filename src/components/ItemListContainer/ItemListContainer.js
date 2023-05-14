import { useState, useEffect } from "react";
import { getProductos, getProductosByCategory } from "../../asyncMoock";
import ItemList from "../../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [productos,setProductos] = useState([])
    const {categoryId} = useParams()
    useEffect(()=>{ 
        const asyncFunc = categoryId ? getProductosByCategory : getProductos
        
        asyncFunc(categoryId)
        .then(response =>{setProductos(response)})
    },[categoryId])
    return(
        <div>
            <h1 id="saludo">{greeting}</h1>
            <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer;