import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { updateProduct } from "../../services/server";

const ProductCard = ({ product }) => {
    const path = `/${product.name}`;

    const [favourite, setFavourite] = useState(product.favourite);

    useEffect(() => {
        handleChange({ ...product, favourite: favourite });
    }, [favourite]);

    const handleClick = () => {
        setFavourite(!favourite);
    };

    const handleChange = async (updatedProduct) => {
        const { id, ...record } = updatedProduct;
        await updateProduct(id, record);
    };

    const classes = favourite
        ? [styles.ProductCard__fav, styles.isFav]
        : [styles.ProductCard__fav];

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
            <FontAwesomeIcon
                icon={faHeart}
                size="2x"
                className={classes.join(" ")}
                onClick={handleClick}
            />
            <FontAwesomeIcon icon={faCartShopping} size="2x" />
        </div>
    );
};

export default ProductCard;
