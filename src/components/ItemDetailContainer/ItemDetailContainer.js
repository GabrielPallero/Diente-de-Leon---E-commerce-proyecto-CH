import { useState, useEffect} from "react";
import { getProductosById} from "../../asyncMoock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";



const ItemDetailContainer= () => {
    const [productos, setProductos] = useState({})
    const{id} = useParams()
 useEffect( () => {
    getProductosById(id)
    .then(response =>{
        setProductos(response)
    },[])
    .catch(error =>{
        console.error(error)
    })
 },[id])
 return (
    <div className="ItemDetailContainer">
        <ItemDetail {...productos}/> 
    </div>
 )
}
export default ItemDetailContainer