import React, { useState, useContext } from "react";
import { CartContext } from '../../components/context/CartContext';
import { Link } from "react-router-dom";
import { DeleteOutlined, LeftCircleFilled } from '@ant-design/icons'
const Cart = () => {

    const { cart, clearCart } = useContext(CartContext);
    
    

    const finalizarCompra = () => {
        const data = {
            items: cart,
            total: cart.reduce((total, item) => total + item.precio, 0),
        };
        console.log(data);
    }
    
    const Total = cart.reduce((total, item) => total + item.precio, 0);

    return (
        <div style={{ color: "aliceblue" }}>
            <div style={{display:"flex", justifyContent:"center",flexDirection:"row-reverse", }}>
            <h2>Mi Carrito</h2>
            
            <Link to={"/"}>
            <button className="botoncarrito" style={{fontSize: "20px", margin: "10px", width:"10px", height:"10px", display: "flex", justifyContent: "center"}}> <LeftCircleFilled /></button>
            </Link>
            </div>
            <div className="carrito">
            {cart.map(product => (
                    <p key={product.id}>
                        <img src={product.imagen} alt={product.descripcion} style={{ width: "100px", height: "100px" }} />
                        <p>{product.descripcion}</p>
                        <p>${product.precio}</p>
                    </p>
                ))}
            </div>
            <div className="bcart">
            <p className="botoncarrito"style={{justifyContent: "center", display: "flex"}}>Total: ${Total}</p>
            <Link to={"/Checkout"}>
                <button className="botoncarrito" onClick={finalizarCompra}>Finalizar compra</button>
            </Link>
            <button className="botoncarrito" onClick={() => clearCart()}><DeleteOutlined /></button>
            </div>
        </div>
    );
}

export default Cart;