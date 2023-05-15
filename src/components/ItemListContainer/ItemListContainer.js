import { db } from '../../services/firebase/FirebaseConfig';
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";



const ItemListContainer = ({greeting}) => {
    
    const getProductos = async () => {

        const productosCollection = collection(db, "productos")
        try {
            const respuesta = await getDocs(productosCollection);
            const array_de_documentos = respuesta.docs;
            const resultado = array_de_documentos.map((documento) => {
                const id = documento.id;
                const data = documento.data();
                data.id = id;
                return data;
            });
            return resultado;
        } catch (error) {
            console.log("Hubo un error pidiendo todos los productos");
        }
      }
   
    const [estado, setEstado] = useState([])
    const parametros = useParams()
  
    useEffect(() => {
  
      getProductos()
        .then((resultado) => {
          setEstado(resultado)
        })
  
    }, [parametros.id])
  
 
    return(
        <div>
            <h1 id="saludo">{greeting}</h1>
            <ItemList productos={estado}/>
        </div>
    )
}
export default ItemListContainer;