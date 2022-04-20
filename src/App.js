import Home from "./containers/Home";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import Cart from "./containers/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsProvider from "./context/ProductsContext";

function App() {
    return (
        <>
            <BrowserRouter>
                <ProductsProvider>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/:prodName" element={<ProductPage />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </ProductsProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
