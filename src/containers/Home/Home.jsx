import styles from "./Home.module.scss";
import ProductList from "../../containers/ProductList";
// import Carousel from "../../components/Carousel";

const Home = () => {
    return (
        <div>
            {/* <Carousel /> */}
            <ProductList />
        </div>
    );
};

export default Home;
