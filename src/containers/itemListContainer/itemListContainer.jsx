import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hechohumo2 from '../../components/img/hechohumo2.png';
import { getAllProducts } from '../../data/items';
import ItemCount from '../../components/itemcount/ItemCount';
import "../../components/componente/estilos.css"

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const res = await getAllProducts();
                setProducts(res);
            } catch (err) {
                setError(err);
            }

            setIsLoading(false);
        };

        fetchProducts();
    }, []);

    if (isLoading) {
        return (
            <div className='cargando'>
                <img className='img' src={hechohumo2} />
                <div>Cargando productos...</div>
            </div>
        );
    }

    if (error) {
        return <div>Error al cargar productos: {error.message}</div>;
    }

    return (
        <div className='productos'>
            <h1 style={{display: "flex",color: "#F9C200", justifyContent: "center"}}>Productos</h1>
            {products.length > 0 ? (
                products.map(product => (
                    <div key={product.id}>
                        <div className='lista' style={{justifyContent: "center"}}>
                            <img
                                src={product.img}
                                style={{ width: '100px', height: '100px', justifyContent: "center" }}
                                onError={(e) => { e.target.src = 'path/to/placeholder/image.jpg'; }}
                                alt={product.categoria}
                            />
                            <div>Producto: {product.categoria}</div>
                            <div>Descripción: {product.descripcion}</div>
                            <div>Precio: ${product.precio}</div>
                            <p>Stock: {product.stock}</p>
                            <Link to={`/Unidad/${product.id}`}>
                                <p style={{ color: "#F9C200" }}>Ver más</p>
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

export default ItemListContainer;
