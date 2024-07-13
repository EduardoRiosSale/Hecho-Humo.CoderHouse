import Navbar from './components/navbar/navbar';
import "./components/componente/estilos.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer  from './containers/itemListContainer/itemListContainer';
import ItemDetail from './containers/itemDetail/itemDetail';
import Items from './containers/items/items'
import BuscadorItem from './containers/practica/buscador';
import { useState } from 'react';
import { CartComponentContext } from './components/context/CartContext';

function App() {

  return (
    
    <CartComponentContext>
    
  <BrowserRouter>
    
      
        <Navbar />
        <Routes>
          <Route path='/Buscador/:descripcion' element={< BuscadorItem/>}/>
          <Route path='/Unidad/:id' element={< ItemDetail/>}/>
          <Route path='/category/:idCategory' element={<Items />}/>
          <Route path='/' element={<ItemListContainer />}/>
        </Routes>
        
      
    </BrowserRouter>
    </CartComponentContext>
    
  )
}

export default App