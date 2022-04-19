import styles from "./ProductList.module.scss";
import ProductCard from "../../components/ProductCard";
import { ProductsContext } from "../../context/ProductsContext";
import { useContext } from "react";

const ProductList = () => {
    const { products } = useContext(ProductsContext);

    return (
        <div className={styles.ProductList}>
            {products.map((product) => {
                return <ProductCard key={product.id} product={product} />;
            })}
        </div>
    );
};

export default ProductList;
