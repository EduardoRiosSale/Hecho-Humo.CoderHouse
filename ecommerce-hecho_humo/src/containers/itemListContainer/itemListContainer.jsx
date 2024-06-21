import { getAllProducts } from '../../data/items';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import hechohumo2 from '../../components/img/hechohumo2.png'


function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

useEffect(() => {
        setIsLoading(true);
        setError(null);

        getAllProducts()
            .then(res => {
                setProducts(res);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>
        <div><img className='img' src={hechohumo2} /></div>
        Cargando productos...
        </div>;
    }

    if (error) {
        return <div>Error al cargar productos: {error.message}</div>;
    }

    return (
        <div style={{}}>
            <h1>Productos</h1>
            {products.length > 0 ? (
                products.map(product => (
                    <div key={product.id} style={{ marginBottom: '30px'}}>
                    
                        <div>
                        <img
                            src={product.img}
                            style={{ width: '150px', height: '150px'}}
                            onError={(e) => { e.target.onerror = null; e.target.src = 'path/to/placeholder/image.jpg'; }}
                        />
                        
                        <p>Producto:{product.categoria}</p>
                        <p>Descripción:{product.descripcion}</p>
                        <p>Precio: {product.precio}</p>
                        <p>Stock: {product.stock}</p>
                        <Link to={`/Unidad/${product.id}`}>
                        <p>Ver mas</p>
                        </Link>
                        </div>
                    </div>
                ))
            ) : (
                <div>No hay productos disponibles en esta categoría.</div>
            )}
        </div>
    );
}

export default ItemListContainer;