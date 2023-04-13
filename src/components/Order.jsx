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
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

const childVariants = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
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
      <motion.p variants={childVariants}>You ordered a {pizza && pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
        {pizza && pizza.toppings.map((topping) => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  );
};

export default Order;
