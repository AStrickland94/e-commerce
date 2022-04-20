import styles from "./Carousel.module.scss";
import { ProductsContext } from "../../context/ProductsContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
    const { products } = useContext(ProductsContext);

    const featured = products.filter((prod) => prod.featured);

    const [slideIndex, setSlideIndex] = useState(0);

    const handleNext = () => {
        if (slideIndex + 1 > featured.length - 1) {
            setSlideIndex(0);
        } else {
            setSlideIndex(slideIndex + 1);
        }
    };

    const handlePrev = () => {
        if (slideIndex - 1 < 0) {
            setSlideIndex(featured.length - 1);
        } else {
            setSlideIndex(slideIndex - 1);
        }
    };
    const [current, setCurrent] = useState(featured[slideIndex]);

    useEffect(() => {
        setCurrent(featured[slideIndex]);
    }, [slideIndex, featured]);

    const path = current ? `/${current.name}` : "";

    return current ? (
        <div className={styles.Carousel}>
            <Link to={path}>
                <div className={styles.Carousel__slide}>
                    <img
                        src={require(`../../assets/img/${current.image}`)}
                        alt="Featured Product"
                        className={styles.Carousel__img}
                    />
                    <div className={styles.Carousel__text}>{current.name}</div>
                </div>
            </Link>

            <button
                className={[styles.Carousel__btn, styles.prev].join(" ")}
                onClick={handlePrev}>
                &#10094;
            </button>
            <button
                className={[styles.Carousel__btn, styles.next].join(" ")}
                onClick={handleNext}>
                &#10095;
            </button>
        </div>
    ) : null;
};

export default Carousel;
