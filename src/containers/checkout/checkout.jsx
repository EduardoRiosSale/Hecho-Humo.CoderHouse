import React, { useState, useContext } from "react";
import { CartContext } from '../../components/context/CartContext';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/client";
import { LeftCircleFilled } from '@ant-design/icons'
import { Link } from "react-router-dom";



const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [idCompra, setIdCompra] = useState("");
    const { clearCart } = useContext(CartContext);
    const { cart } = useContext(CartContext);
    
    const finalizarCompra = () => {
        const data = {
            buyer: {
                nombre,
                apellido,
                telefono,
                email,
            },
            items: cart,
            total: cart.reduce((total, item) => total + item.precio, 0),
        };
        
        
        setNombre("");
        setApellido("");
        setTelefono("");
        setEmail("");
        

        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, data).then(({id}) =>setIdCompra(id))
        console.log(data)
    };

    const total = cart.reduce((total, item) => total + item.precio, 0);


    return (
        <div style={{ color: "aliceblue" }}>
            <div style={{display:"flex", justifyContent:"center",flexDirection:"row-reverse"}}>
            <h2 style={{justifyContent: "center", display: "flex"}}>Finalizando compra</h2>
            
            <Link to={"/"}>
            <button className="botoncarrito" style={{fontSize: "20px", margin: "10px", width:"10px", height:"10px", display: "flex", justifyContent: "center"}}> <LeftCircleFilled /></button>
            </Link>
            </div>
            <p style={{justifyContent: "center", display: "flex"}}>Estás llevando:</p>
            <ul className="carrito">
                {cart.map(product => (
                    <p key={product.id}>
                        <img src={product.imagen} style={{ width: "100px", height: "100px" }} />
                        <p>{product.descripcion}</p>
                        <p>${product.precio}</p>
                    </p>
                ))}
            </ul>
            <div className="bcart">
            <p className="botoncarrito">Total: ${total}</p>
            </div>
            <div className="checkout">
                <h4>Por favor, completa con tus datos</h4>
                <input type="text" placeholder="Ingresa tu nombre..." value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <input type="text" placeholder="Ingresa tu apellido..." value={apellido} onChange={(e) => setApellido(e.target.value)} />
                <input type="text" placeholder="Ingresa tu teléfono..." value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                <input type="text" placeholder="Ingresa tu email..." value={email} onChange={(e) => setEmail(e.target.value)} />
                <button className="botoncarritoF" onClick={finalizarCompra} onClickCapture={clearCart} >Finalizar compra</button>
                <p style={{justifyContent: "center", display: "flex"}}>Tu código de compra es:</p> 
                <p className="botoncarrito" style={{color: "", fontStyle:"oblique", justifyContent:"center"}}> {idCompra} </p>
                </div>
            </div>

    );
};

export default Checkout;
