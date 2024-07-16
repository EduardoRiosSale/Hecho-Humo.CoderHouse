import React, {useState, useContext} from "react";
import { CartContext } from '../../components/context/CartContext'
import { Link } from "react-router-dom";


const Cart = () => {

    const { cart } = useContext(CartContext)

    const finalizarCompra = () => {
        const data = {
            items: cart,
            total: cart.reduce((total, item) => total + item.precio, 0),
            
            
        };
        console.log(data)



    }
    const Total = cart.reduce((total, item) => total + item.precio, 0)
    
    return(
        <div style={{color: "aliceblue"}}><h2>Mi carrito</h2>
            <div className="carrito">
            <div>
            {cart.map((pr, i) => <div key={i}><p>{pr.descripcion}</p> </div> )}
            </div>
            <div>  
            {cart.map((pr, i) => <div key={i}><p>${pr.precio}</p> </div> )}
            
            </div>
            </div>
            
            <p> Total: ${ Total }</p>
            <Link to={"/Checkout"}>
            <button className="botoncarrito" onClick={finalizarCompra}>Finalizar compra</button>
            </Link>
        </div>
    )
}

export default Cart