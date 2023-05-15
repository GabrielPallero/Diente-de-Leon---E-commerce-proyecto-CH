import { db } from "../../services/firebase/FirebaseConfig";
import { useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, doc} from "firebase/firestore";


import { useParams } from "react-router-dom";




const ItemDetailContainer= () => {
   
    const [producto,setProductos] = useState(null)
    const [loading, setLoading] = useState (true)
    const {itemId} = useParams()
    useEffect(()=>{ 
  setLoading(true)
const docRef = doc (db,'products',itemId)
    getDoc(docRef)
    .then(response =>{
        const data =response.data()
         const productosAdapted = {id: response.id, ...data}
         setProductos(productosAdapted)
        })
    .catch(error=>{
        console.log(error)
    })
    .finally(()=>{
        setLoading(false)
    })
},[itemId])
 return (
    <div className="ItemDetailContainer">
        <ItemDetail {...setProductos}/> 
    </div>  
 )
}
export default ItemDetailContainer