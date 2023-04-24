import './index.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
   <NavBar/>
   <ItemListContainer greeting={'Tejidos Artesanales, Hechos con 💓'}/>
  <ItemCount initial = {1} stock={20} onAdd={(contador) => console.log('Productos Agregados', contador)}/>
   </div>
  )
  ;
}

export default App;
