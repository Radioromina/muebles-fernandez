
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="ESTE ES EL CONTENEDOR DE LOS ITEMS"/>
    </div>
  );
}

export default App;
