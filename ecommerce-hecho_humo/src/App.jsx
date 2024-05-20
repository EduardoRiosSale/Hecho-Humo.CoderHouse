import Navbar from './components/navbar/navbar';
import "./components/componente/estilos.css"
import ItemListContainer from './containers/itemListContainer/itemListContainer';



function App() {
  return (
    <div>
    <Navbar />
    <ItemListContainer greeting={"Proximamente - El mejor Ecommerce"}/>
    </div>
  )
}

export default App
