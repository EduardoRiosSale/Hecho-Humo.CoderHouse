import { getUnidad } from '../../data/items';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import hechohumo2 from '../../components/img/hechohumo2.png'

function ItemDetailContainer() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const { id } = useParams();

    console.log(id)

useEffect(() => {
        setIsLoading(true);
        setError(null);

        getUnidad(parseInt(id))
            .then(res => {
                setProducts(res);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err);
                setIsLoading(false);
            });
    }, [id]);

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
        <div>
            
            <h2>Productos</h2>
            {products.length > 0 ? (
                products.map(product => (
                    <div key={product.id} style={{ marginBottom: '30px'}}>
                        <img
                            src={product.img}
                            alt={product.producto}
                            style={{ width: '150px', height: '150px' }}
                            onError={(e) => { e.target.onerror = null; e.target.src = 'path/to/placeholder/image.jpg'; }}
                        />
                        <p><strong>Producto:</strong> {product.categoria}</p>
                        <p><strong>Descripción:</strong> {product.descripcion}</p>
                        <p><strong>Precio:</strong> {product.precio}</p>
                        <p><strong>Stock:</strong> {product.stock}</p>
                    </div>
                ))
            ) : (
                <div>No hay productos disponibles en esta categoría.</div>
            )}
        </div>
    );
}

export default ItemDetailContainer;