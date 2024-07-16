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
            <h2 style={{justifyContent: "center"}}>Mi carrito</h2>
            <Link to={"/"}>
            <button className="botoncarrito" style={{fontSize: "20px", margin: "10px", width:"10px", height:"10px", display: "flex"}}> <LeftCircleFilled /></button>
            </Link>
            <div className="carrito">
            {cart.map(product => (
                    <p key={product.id}>
                        <img src={product.imagen} alt={product.descripcion} style={{ width: "100px", height: "100px" }} />
                        <p>{product.descripcion}</p>
                        <p>${product.precio}</p>
                    </p>
                ))}
            </div>
            <p style={{justifyContent: "center"}}>Total: ${Total}</p>
            <Link to={"/Checkout"}>
                <button className="botoncarrito" style={{justifyContent: "center"}} onClick={finalizarCompra}>Finalizar compra</button>
            </Link>
            <button className="botoncarrito" style={{margin:"10px", justifyContent:"center"}} onClick={() => clearCart()}><DeleteOutlined /></button>
        </div>
    );
}

export default Cart;