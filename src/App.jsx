import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPages from "./components/LandingPages";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import Header from "./components/Header";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <Router basename="/paradise-nursery/">
              <Header />
                <Routes>
                    <Route path="/" element={<LandingPages />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
