import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false); // 다크모드 상태 관리

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); // 다크모드 토글
  };

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <ShopContextProvider>
        <Router>
          <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
