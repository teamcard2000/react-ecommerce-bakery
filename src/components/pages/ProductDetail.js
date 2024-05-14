import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import ProductDetailCard from "../ProductDetailCard";
import { useCart } from "../../contexts/CartContext";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/products/${productId}`
        );
        setProduct(response.data);
      } catch (err) {
        console.error("Error fetching product details", err);
      }
      setLoading(false);
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    addToCart(product, 1); // default quantity is 1
    alert("Added to cart!");
  }

  const productIMG =
    product.Product_Images && product.Product_Images[0]
      ? product.Product_Images[0].imageURL
      : "https://picsum.photos/300/300";

  console.log(productIMG);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <>
      <div
        className="py-5 px-3"
        style={{ backgroundColor: "#D7BB9C", color: "#333333" }}
      >
        <Container>
          <ProductDetailCard product={product} productIMG={productIMG} onAddToCart={handleAddToCart} />
        </Container>
      </div>
    </>
  );
}

export default ProductDetail;
