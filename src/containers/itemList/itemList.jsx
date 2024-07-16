import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import hechohumo2 from '../../components/img/hechohumo2.png';
import "../../components/componente/estilos.css"
import { collection, doc, getDoc, getDocs, limit, query, where } from "firebase/firestore"
import { db } from '../../firebase/client';
import { LoadingOutlined } from '@ant-design/icons'
const ItemList = () => {
    const [products, setProducts] = useState("Productos");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const categoria = useParams().categoria

    useEffect(() => {
        const productosRef = collection(db, "productos");
        const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;
    
        getDocs(q)
            .then((resp) => {
                setProducts(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                        
                    })
                    
                );
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error); 
                setIsLoading(false);
            });
    
    }, [categoria]);
    if (isLoading) {
        return (
            <div className='cargando'>
                <img className='img' src={hechohumo2} />
                <div><LoadingOutlined /></div>
                <div>Cargando productos...</div>
            </div>
        );
    }

    if (error) {
        return <div>Error al cargar productos: {error.message}</div>;
    }

    return (
        <div className='productos'>
            <h1 style={{ display: 'flex', color: '#F9C200', justifyContent: 'center' }}>Productos</h1>
            {products.length > 0 ? (
                products.map(product => (
                    <div key={product.id}>
                        <div className='lista' style={{ justifyContent: 'center' }}>
                            <img
                                src={product.imagen}
                                style={{ width: '100px', height: '100px', justifyContent: 'center' }}
                                onError={e => { e.target.src = 'path/to/placeholder/image.jpg'; }}
                                alt={product.categoria}
                            />
                            <div>Producto: {product.categoria}</div>
                            <div>Descripción: {product.descripcion}</div>
                            <div>Precio: ${product.precio}</div>
                            <p>Stock: {product.stock}</p>
                            <Link to={`/Unidad/${product.id}`}>
                                <p style={{ color: '#F9C200' }}>Ver más</p>
                            </Link>
                        </div>
                    </div>
                ))
            ) : (
                <div>No hay productos disponibles en esta categoría.</div>
            )}
        </div>
    );
};

export default ItemList;
