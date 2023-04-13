import React from "react";
import { motion } from "framer-motion";

const containerVariant = {
  initial: {
    opacity: 0,
    x: "100vw",
  },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};
const Order = ({ pizza }) => {
  return (
    <motion.div
      variants={containerVariant}
      initial="initial"
      animate="final"
      className="container order"
    >
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza && pizza.base} pizza with:</p>
      {pizza && pizza.toppings.map((topping) => <div key={topping}>{topping}</div>)}
    </motion.div>
  );
};

export default Order;
