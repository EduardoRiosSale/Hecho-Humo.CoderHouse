import { getProductsByCategory } from '../../data/items';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import hechohumo2 from '../../components/img/hechohumo2.png'
import { Link } from 'react-router-dom';

function ItemList() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const { idCategory } = useParams();
    const params = useParams();
    console.log(params)

    console.log(idCategory)

useEffect(() => {
        setIsLoading(true);
        setError(null);

        getProductsByCategory(idCategory)
            .then(res => {
                setProducts(res);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err);
                setIsLoading(false);
            });
    }, [idCategory]);

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
            <h1>{idCategory ? idCategory : 'Productos'}</h1>
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
                        <Link to={`/Unidad/${product.id}`}>
                        <p>Ver mas</p>
                        </Link>
                    </div>
                ))
            ) : (
                <div>No hay productos disponibles en esta categoría.</div>
            )}
        </div>
    );
}

export default ItemList;