import React from "react";
import ProductCard from "./ProductCard";
import "./assets/Headphones.jpg";

export default function App() {
  const handleAddToCart = (product) => {
    console.log("Added:", product);
  };

  return (
    <div>
      <ProductCard
        title="Wireless Headphones"
        price={2999}
        image="productCard/src/assets/headphones.jpg"
        description="High quality noise cancelling headphones."
        onAddToCart={() => handleAddToCart("Wireless Headphones")}
      />
    </div>
  );
}