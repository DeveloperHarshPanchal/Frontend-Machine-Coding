import "./App.css";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const products = [
    {
      id: 1,
      name: "iPhone 15",
      category: "Electronics",
      price: 70000,
    },
    {
      id: 2,
      name: "Samsung S24",
      category: "Electronics",
      price: 65000,
    },
    {
      id: 3,
      name: "Nike Shoes",
      category: "Footwear",
      price: 5000,
    },
    {
      id: 4,
      name: "Adidas Shoes",
      category: "Footwear",
      price: 4500,
    },
    {
      id: 5,
      name: "MacBook Air",
      category: "Electronics",
      price: 90000,
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className="container">
      <div className="filters">
        <h1>Search & Filter</h1>
        <input
          type="text"
          placeholder="search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "All" ? "All Categories" : cat}
            </option>
          ))}
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ₹{product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}
