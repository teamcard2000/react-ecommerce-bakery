import React, { useEffect, useState } from "react";
import { useCart } from "../../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa6";
import CheckoutForm from "../CheckoutForm";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();
  const [showCheckout, setShowCheckout] = useState(false);

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  const calculateTax = () => {
    const taxRate = 0.13; // 13% Tax
    return calculateSubtotal() * taxRate;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  // Clear the cart when the modal closes after a successful checkout
  const handleModalClose = () => {
    setShowCheckout(false);
    clearCart(); // Ensure this function is called only if the payment was successful
  };

  return (
    <div
      className="shopping-cart-container py-5 px-3 px-md-5"
      style={{ color: "#333333" }}
    >
      <div className="cart-items">
        <h2 className="fw-bold">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="display-5 fw-medium mt-5 py-5 text-center">
            Your cart is empty
          </p>
        ) : (
          <>
            <div className="cart-header fw-bold">
              <span>Name</span>
              <span>Item Price</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>
            {cartItems.map((item, index) => (
              <React.Fragment key={index}>
                <div className="cart-row fw-medium" key={index}>
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                  <span>
                    <Button
                      onClick={() =>
                        updateQuantity(item.productId, item.quantity - 1)
                      }
                      className="quantityButton"
                    >
                      <FaMinus className="icon icon-thick" />
                    </Button>
                    {item.quantity}
                    <Button
                      onClick={() =>
                        updateQuantity(item.productId, item.quantity + 1)
                      }
                      className="quantityButton"
                    >
                      <FaPlus className="icon icon-thick" />
                    </Button>
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                  <Button
                    onClick={() => removeFromCart(item.productId)}
                    variant="danger"
                    className="fw-bold"
                  >
                    Remove
                  </Button>
                </div>
                {index < cartItems.length - 1 && <hr className="line-break" />}{" "}
                {/* Only add hr if it's not the last item */}
              </React.Fragment>
            ))}
          </>
        )}
      </div>
      <div className="order-summary" style={{ color: "#333333" }}>
        <h2 className="fw-bold">Order Summary</h2>
        <div className="summary-row">
          <span>Order Subtotal:</span>
          <span>${calculateSubtotal().toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Tax:</span>
          <span>${calculateTax().toFixed(2)}</span>
        </div>
        <div className="summary-total">
          <span>Total:</span>
          <span>${calculateTotal().toFixed(2)}</span>
        </div>
        <div className="coupon">
          <input type="text" placeholder="Coupon Code" />
          <Button className="apply-button">Apply</Button>
        </div>
        <Button
          className="checkout-button"
          onClick={() => setShowCheckout(true)}
          disabled={cartItems.length === 0}
        >
          Proceed to Checkout
        </Button>
        <Link to="/menu" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>

      <Modal show={showCheckout} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CheckoutForm totalAmount={calculateTotal()} />
        </Modal.Body>
      </Modal>
    </div>
  );
}
