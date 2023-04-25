import { useState, useEffect} from "react";
import { getProductosDetalle } from "../../asyncMoock";
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer= () => {
    const [productos, setProductos] = useState([])
 useEffect( () => {
    getProductosDetalle('1','2','3')
    .then(response =>{
        setProductos(response)
    })
    .catch(error =>{
        console.error(error)
    })
 },[])
 return (
    <div className="ItemDetailContainer">
        <ItemDetail {...productos}/> 
    </div>
 )
}
export default ItemDetailContainer