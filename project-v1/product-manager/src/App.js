import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import LoginPage from "./LoginPage";
import ProductPage from "./ProductPage";

function App() {
  return (
    <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/products" element={<ProductPage />} />
                </Routes>
            </Router>
        </AuthProvider>
  );
}

export default App;
