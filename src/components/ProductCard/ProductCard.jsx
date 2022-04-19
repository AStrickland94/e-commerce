import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const path = `/${product.name}`;

    return (
        <div className={styles.ProductCard}>
            <Link to={path}>
                <img
                    src={require(`../../assets/img/${product.image}`)}
                    alt="Product"
                    className={styles.ProductCard__img}
                />
            </Link>

            <h2>{product.name}</h2>
            <p>${product.price}</p>
        </div>
    );
};

export default ProductCard;
