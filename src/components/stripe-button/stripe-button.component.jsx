import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ prince }) => {
  const priceForStripe = prince * 100;
  const publishableKey =
    "pk_test_51JL74iLT4REY3FO88bOffYSU1NlQ9PNs2Q93Gaf8WBp6sBxvpKY3YYKuivHL1UtiXIxekefqSX6BKBBXoY1hXbAO001Ma8SyNx";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${prince}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
