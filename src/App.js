import './index.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
   <NavBar/>
   <ItemListContainer greeting={'Tejidos Artesanales, Hechos con 💓'}/>
   
   
   <ItemDetailContainer/>
   </div>
  )
  ;
}

export default App;
