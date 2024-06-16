import Navbar from './components/navbar/navbar';
import "./components/componente/estilos.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemList from './containers/itemList/itemList';
import ItemListContainer from './containers/itemListContainer/itemListContainer';


function App() {

  return (
  <BrowserRouter>
    
      <nav>
        <Navbar />
        <Routes>
        <Route path='/category/id' element={<ItemList />}/>
          <Route path='/category/:idCategory' element={<ItemList />}/>
          <Route path='/' element={<ItemListContainer />}/>
        </Routes>
        
      </nav>
    </BrowserRouter>
  )
}

export default App