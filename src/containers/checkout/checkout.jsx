import React, { useState, useContext } from "react";
import { CartContext } from '../../components/context/CartContext';

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");

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
        console.log(data);

        setNombre("");
        setApellido("");
        setTelefono("");
        setEmail("");
    };

    const total = cart.reduce((total, item) => total + item.precio, 0);
    const totalUnidad = cart.map(item => item.descripcion).join(", ");

    return (
        <div style={{color: "aliceblue"}}>
            <h2>Finalizando compra</h2>
            <p>Estás llevando:</p>
            <ul>
                {cart.map(item => <li className="Lcheckout" key={item.id}>{item.descripcion}</li>)}
            </ul>
            <p>Total: ${total}</p>
            <div className="checkout">
                <h4>Por favor, completa con tus datos</h4>
                <input type="text" placeholder="Ingresa tu nombre..." value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <input type="text" placeholder="Ingresa tu apellido..." value={apellido} onChange={(e) => setApellido(e.target.value)} />
                <input type="text" placeholder="Ingresa tu teléfono..." value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                <input type="text" placeholder="Ingresa tu email..." value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button className="botoncarritoF" onClick={finalizarCompra}>Finalizar compra</button>
        </div>

    );
};

export default Checkout;
