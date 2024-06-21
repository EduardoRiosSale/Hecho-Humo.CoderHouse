import Navbar from './components/navbar/navbar';
import "./components/componente/estilos.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemList from './containers/itemList/itemList';
import ItemListContainer from './containers/itemListContainer/itemListContainer';
import ItemDetail from './containers/itemDetail/itemDetail';
import Items from './containers/items/items'

function App() {

  return (
  <BrowserRouter>
    
      <nav>
        <Navbar />
        <Routes>
        <Route path='/Unidad/:id' element={< ItemDetail/>}/>
          <Route path='/category/:idCategory' element={<Items />}/>
          <Route path='/' element={<ItemListContainer />}/>
        </Routes>
        
      </nav>
    </BrowserRouter>
  )
}

export default App