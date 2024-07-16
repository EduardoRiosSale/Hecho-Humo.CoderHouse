import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import hechohumo2 from '../../components/img/hechohumo2.png';
import "../../components/componente/estilos.css";
import ItemCount from '../../components/itemcount/ItemCount';
import { CartContext } from '../../components/context/CartContext';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/client';
import { Link } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons'


function ItemDetailContainer() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);
    const { agregarAlCarrito } = useContext(CartContext);
    const { id } = useParams(); 

    useEffect(() => {
        const fetchProduct = async (productId) => {
            try {
                const productRef = doc(db, "productos", productId);
                const categoria = await getDoc(productRef);

                if (categoria.exists) {
                    const miProducto = {
                        id: categoria.id,
                        ...categoria.data()
                    };
                    setProducts([miProducto]);
                } else {
                    setError(new Error('El producto no existe.'));
                }
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProduct(id);
    }, [id]);

    if (isLoading) {
        return (
            <div className="cargando">
                <img className="img" src={hechohumo2} alt="Cargando productos" />
                <div><LoadingOutlined /></div>
                Cargando productos...
            </div>
        );
    }

    if (error) {
        return <div>Error al cargar productos: {error.message}</div>;
    }

    return (
        <div>
            <h1 style={{ display: "flex", color: "#F9C200" }}>Productos</h1>
            {products.length > 0 ? (
                products.map(product => (
                    <div className="Dlista" key={product.id}>
                        <img
                            src={product.imagen}
                            alt={product.producto}
                            style={{ width: '150px', height: '150px' }}
                            onError={(e) => { e.target.onerror = null; e.target.src = placeholderImage; }}
                        />
                        <p><strong>Producto:</strong> {product.categoria}</p>
                        <p><strong>Descripción:</strong> {product.descripcion}</p>
                        <p><strong>Precio:</strong> {product.precio}</p>
                        <p><strong>Stock:</strong> {product.stock}</p>
                        <ItemCount product={product} agregarAlCarrito={agregarAlCarrito} />
                        <button className='botoncarrito' onClick={() => agregarAlCarrito({ descripcion: product.descripcion, precio: product.precio, ...product })}>Agregar al carrito</button>
                        <Link to={"/cart"}>
                        <button className='botoncarrito' style={{margin: "10px"}}>Ver carrito</button>
                        </Link>
                    </div>
                ))
            ) : (
                <div>No hay productos disponibles en esta categoría.</div>
            )}
        </div>
    );
}

export default ItemDetailContainer;