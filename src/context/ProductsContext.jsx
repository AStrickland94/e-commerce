import { createContext, useState, useEffect } from "react";
import { getProducts } from "../services/server";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const getData = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    useEffect(() => {
        getData();
    }, []);

    const data = { products, setProducts };

    return (
        <ProductsContext.Provider value={data}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;
