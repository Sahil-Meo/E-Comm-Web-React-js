import React, { useState, useEffect } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10); // Default limit is 10
  const [loading, setLoading] = useState(false);

  // Fetch products from the API
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=${limit}`);
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setLoading(false);
  };

  // Fetch products when the component mounts or the limit changes
  useEffect(() => {
    fetchProducts();
  }, [limit]);

  return (
    <div>
      <h1>Product Page</h1>

      {/* Limit Selection */}
      <div>
        <label htmlFor="limit">Set Product Limit: </label>
        <input
          type="number"
          id="limit"
          value={limit}
          min="1"
          max="100"
          onChange={(e) => setLimit(Number(e.target.value))}
        />
      </div>

      {/* Loading Indicator */}
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.thumbnail} alt={product.title} />
              <h2>{product.title}</h2>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
