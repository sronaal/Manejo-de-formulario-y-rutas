import { createContext, useState, useContext } from 'react';

// Crear el contexto
const ProductoContext = createContext();

export const useProductos = () => {
    return useContext(ProductoContext);
};

export const ProductoProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);

    const addProducto = (producto) => {
        setProductos(prevProductos => [...prevProductos, producto]);
    };

    return (
        <ProductoContext.Provider value={{ productos, addProducto }}>
            {children}
        </ProductoContext.Provider>
    );
};
