import { createContext, useState } from 'react';


export const CartContext = createContext();

export const CartComponentContext = ({ children }) => {
    const [products, setProducts] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [cart, setCart] = useState([])
    
    const agregarAlCarrito = (item) => {
        setCart([...cart, item])
        setCantidad(cantidad + 1)
    }
    
    
    return(
        <CartContext.Provider value={ { products, cantidad ,agregarAlCarrito } }>
            {children}
        </CartContext.Provider>
    )
}