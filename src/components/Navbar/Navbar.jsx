import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
            <ul className={styles.Navbar__list}>
                <li className={styles.Navbar__list_item}>
                    <Link to="/">HOME</Link>
                </li>
                <li className={styles.Navbar__list_item}>
                    <Link to="/cart">CART</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
