import React from "react";

const Order = ({ pizza }) => {
  return (
    <div className="container order">
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza && pizza.base} pizza with:</p>
      {pizza &&
        pizza.toppings.map((topping) => <div key={topping}>{topping}</div>)}
    </div>
  );
};

export default Order;
