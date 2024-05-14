import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Form, Button } from "react-bootstrap";
import { useCart } from "../contexts/CartContext"; // Import useCart hook

const CheckoutForm = ({ totalAmount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { cartItems, clearCart } = useCart(); // Get clearCart method from context
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || cartItems.length === 0) {
      return;
    }

    setLoading(true);

    try {
      // fetch the client secret from the server-side endpoint
      const response = await fetch(
        "http://localhost:8080/payment/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({ amount: totalAmount }),
        }
      );

      if (response.status === 403) {
        console.error(
          "Forbidden: Make sure you are logged in to be able to do the checkout process!"
        );
        setLoading(false);
        return;
      }

      const { clientSecret } = await response.json();
      console.log("client secret: ", clientSecret);

      if (!clientSecret) {
        console.error("Failed to get client secret");
        setLoading(false);
        return;
      }

      const cardElement = elements.getElement(CardElement);

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (result.error) {
        throw result.error;
      } else {
        if (result.paymentIntent.status === "succeeded") {
          clearCart(); // Clear the cart after successful payment
          alert("Payment successful!");
        }
      }
    } catch (err) {
      console.error("Payment error:", err.message);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <CardElement />
      <Button type="submit" disabled={!stripe || loading}>
        {loading ? "Processing..." : "Pay Now"}
      </Button>
    </Form>
  );
};

export default CheckoutForm;
