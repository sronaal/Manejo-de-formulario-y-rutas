import { useProductos } from './ContextProducto'; // Ajusta la ruta según tu estructura

export const GridProductos = () => {
    const { productos } = useProductos();
    console.log(productos)
    return (
        <div className="productos">
            {productos.length === 0 ? (
                <p>No hay productos disponibles.</p>
            ) : (
                productos.map((producto, index) => (
                    <div key={index} className="producto">
                        <h3>{producto.nombreProducto}</h3>
                        <p>Categoría: {producto.categoriaProducto}</p>
                        <p>Precio: {producto.precioProducto}</p>
                        <p>Stock: {producto.stockProduto}</p>
                    </div>
                ))
            )}
        </div>
    );
};
