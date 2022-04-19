import styles from "./ProductPage.module.scss";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import { useContext, useEffect, useState } from "react";

const ProductPage = () => {
    let params = useParams();

    const { products } = useContext(ProductsContext);

    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(products.find((prod) => prod.name === params.prodName));
    }, [products]);

    let navigate = useNavigate();

    const image = product.image
        ? require(`../../assets/img/${product.image}`)
        : "";

    return product ? (
        <div>
            <img
                src={image}
                alt="Product"
                className={styles.ProductCard__img}
            />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <p>Quantity: {product.quantity}</p>
        </div>
    ) : (
        navigate("/")
    );
};

export default ProductPage;
