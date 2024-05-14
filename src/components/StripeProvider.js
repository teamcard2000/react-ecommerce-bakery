import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51PG57NBKkp07cdA9a4JmjP9YjlXHIRHmG4PSeBuWfgMFjEeioLZHBDWzBUhy8xkqnGK8cftKhiQcSG0UlUQUYeL500nTBDgVVI"
);

const StripeProvider = ({ children }) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider;
