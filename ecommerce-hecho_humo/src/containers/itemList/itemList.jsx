import { getProductsByCategory } from '../../data/items';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
        return <div>Cargando productos...</div>;
    }

    if (error) {
        return <div>Error al cargar productos: {error.message}</div>;
    }

    return (
        <div>
            <h1>{idCategory ? `Categoria: ${idCategory}` : 'Pagina Principal'}</h1>
            <h2>Productos</h2>
            {products.length > 0 ? (
                products.map(product => (
                    <div key={product.id} style={{ marginBottom: '20px', display: "flex", flexDirection:"row",  }}>
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

export default ItemList;