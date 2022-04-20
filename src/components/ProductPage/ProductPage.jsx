import styles from "./ProductPage.module.scss";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { addCart } from "../../services/server";

const ProductPage = () => {
    let params = useParams();

    const { products } = useContext(ProductsContext);

    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(products.find((prod) => prod.name === params.prodName));
    }, [products]);

    let navigate = useNavigate();

    const [favourite, setFavourite] = useState(product.favourite);

    const handleFav = () => {
        setFavourite(!favourite);
    };

    const classes = favourite
        ? [styles.ProductPage__fav, styles.isFav]
        : [styles.ProductPage__fav];

    const image = product.image
        ? require(`../../assets/img/${product.image}`)
        : "";

    const [quantity, setQuantity] = useState(0);

    const handleChange = (input) => {
        setQuantity(input);
    };

    const handleSubmit = () => {
        if (quantity > product.quantity) {
            alert("Sorry we don't have that many in stock");
        } else {
            // addCart({ ...product, itmQty: quantity });
        }
    };

    return product ? (
        <div className={styles.ProductPage}>
            <img
                src={image}
                alt="Product"
                className={styles.ProductPage__img}
            />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            {product.colour && (
                <>
                    <label htmlFor="colour-select">Colour:</label>
                    <select name="colours" id="colour-select">
                        {product.colour.map((colour, index) => {
                            return (
                                <option value={colour} key={index}>
                                    {colour}
                                </option>
                            );
                        })}
                    </select>
                </>
            )}
            {product.size && (
                <>
                    <label htmlFor="size-select">Size:</label>
                    <select name="sizes" id="size-select">
                        {product.size.map((size, index) => {
                            return (
                                <option value={size} key={index}>
                                    {size}
                                </option>
                            );
                        })}
                    </select>
                </>
            )}
            <p>Stock: {product.quantity}</p>
            <FontAwesomeIcon
                icon={faHeart}
                size="2x"
                className={classes.join(" ")}
                onClick={handleFav}
            />
            <label htmlFor="quantity">Quantity: </label>
            <input type="text" id="quantity" onChange={handleChange} />
            <button onClick={handleSubmit}>Add to cart</button>
        </div>
    ) : (
        navigate("/")
    );
};

export default ProductPage;
