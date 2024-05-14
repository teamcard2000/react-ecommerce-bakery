import React from "react";
import { Button } from "react-bootstrap";

function ProductDetailCard({ product, productIMG, onAddToCart }) {
  return (
    <div
      className="product-detail-container bg-white text-center"
      style={{ borderRadius: "12px" }}
    >
      <h1>{product.name}</h1>
      <img
        src={
          process.env.PUBLIC_URL + "/assets/images/product imgs/" + productIMG
        }
        alt={product.name}
        style={{ width: "300px", height: "100%" }}
        className="my-3"
      />
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <Button onClick={onAddToCart} size="lg" className="primary-button2">ADD TO ORDER</Button>
    </div>
  );
}

export default ProductDetailCard;
