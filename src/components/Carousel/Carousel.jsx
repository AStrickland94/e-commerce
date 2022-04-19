import styles from "./Carousel.module.scss";
import { ProductsContext } from "../../context/ProductsContext";
import { useContext, useEffect, useState } from "react";

const Carousel = () => {
    const { products } = useContext(ProductsContext);

    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        setFeatured(products.filter((prod) => prod.featured));
    }, [products]);

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (inc) => {
        if (slideIndex + inc > featured.length - 1) {
            setSlideIndex(0);
        } else if (slideIndex + inc < 0) {
            setSlideIndex(featured.length - 1);
        } else {
            setSlideIndex((slideIndex += inc));
        }
    };
    console.log(featured);
    const [current, setCurrent] = useState(featured[slideIndex]);

    useEffect(() => {
        setCurrent(featured[slideIndex]);
    }, [slideIndex, featured]);

    return (
        <div className={styles.Carousel}>
            <div className={styles.Carousel__slide} key={current.id}>
                <img
                    src={require(`../../assets/img/${current.image}`)}
                    alt="Featured Product"
                    className={styles.Carousel__img}
                />
                <div className={styles.Carousel__text}>{current.name}</div>
            </div>

            <button
                className={[styles.Carousel__btn, styles.prev].join(" ")}
                onClick={handleClick(-1)}>
                &#10094;
            </button>
            <button
                className={[styles.Carousel__btn, styles.next].join(" ")}
                onClick={handleClick(1)}>
                &#10095;
            </button>
        </div>
    );
};

export default Carousel;
