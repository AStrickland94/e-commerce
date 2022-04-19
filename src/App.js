import Home from "./containers/Home";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
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
                    </Routes>
                </ProductsProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
