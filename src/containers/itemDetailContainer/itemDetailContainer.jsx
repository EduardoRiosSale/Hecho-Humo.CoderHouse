import { getUnidad } from '../../data/items';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import hechohumo2 from '../../components/img/hechohumo2.png'
import "../../components/componente/estilos.css"
import ItemCount from '../../components/itemcount/ItemCount'
import { CartContext } from '../../components/context/CartContext';
import { collection, doc, getDoc, getDocs, limit, query, where } from "firebase/firestore"
import { db } from '../../firebase/client';



function ItemDetailContainer({}) {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { agregarAlCarrito } = useContext(CartContext)
    const { id } = useParams();

    

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
    // const productRef= doc(db, "productos", "zfDGBUpDRBzeIAowlgrF")
    
    // const getProducts = () => {
    //     getDoc(productRef).then((snapshot) => {
    //         if(snapshot.exists()){
    //             const miProducto = {
    //                 id: snapshot.id,
    //                 ...snapshot.data()
    //             }
    //             console.log( miProducto )
    //         }
    //     })
    // }
    // getProducts()

    // const productRef= collection(db, "productos")
    // const productRef= collection(db, "productos")
    
    const productsRefFilter = query(
        collection(db, "productos"),
        where("categoria", "==", "encendedores"),
        // where("stock", "<", 10),
        limit(10)
    )
    const getProducts = async () =>{
        const data = await getDocs(productsRefFilter)
        const dataFiltrada = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        console.log(dataFiltrada)
        
        }
    
        getProducts()
    }, []);

    if (isLoading) {
        return <div className='cargando'>
            <div ><img className='img' src={hechohumo2} /></div>
            Cargando productos...
            </div>;
    }

    if (error) {
        return <div>Error al cargar productos: {error.message}</div>;
    }

    return (
        <div>
            
            <h1 style={{display: "flex",color: "#F9C200"}}>Productos</h1>
            {products.length > 0 ? (
                products.map(product => (
                    <div className='Dlista'>
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
                        <ItemCount/>
                        <button className='botoncarrito' onClick={() => agregarAlCarrito({descripcion: product.descripcion, precio: product.precio, quantity: ItemCount})}>Agregar al carrito</button>
                        <p><strong></strong> {product.info}</p>
                    </div>
                ))
            ) : (
                <div>No hay productos disponibles en esta categoría.</div>
            )}
        </div>
    );
}

export default ItemDetailContainer;