import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

const ProductPage = () => {
    const { token } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: "", price: "" });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const response = await axios.get("http://localhost:5001/api/products", {
            headers: { Authorization: `Bearer ${token}` }
        });
        setProducts(response.data);
    };

    const handleCreate = async () => {
        await axios.post("http://localhost:5001/api/products", newProduct, {
            headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
        });
        setNewProduct({ name: "", price: "" });
        fetchProducts();
    };

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map(p => (
                    <li key={p.id}>{p.name} - ${p.price}</li>
                ))}
            </ul>
            <h3>Add Product</h3>
            <input type="text" placeholder="Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
            <input type="number" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
            <button onClick={handleCreate}>Create</button>
        </div>
    );
};

export default ProductPage;
