import { createContext, useState } from 'react';


export const CartContext = createContext();

export const CartComponentContext = ({ children }) => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    
    const agregarAlCarrito = (item) => {
        setCart([...cart, item])
        
    }
    
    
    return(
        <CartContext.Provider value={ { products, cart ,agregarAlCarrito } }>
            {children}
        </CartContext.Provider>
    )
}