import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 2000);
  }, [setShowModal]);
  return (
    <motion.div
      variants={containerVariant}
      initial="initial"
      animate="final"
      exit="exit"
      className="container order"
    >
      <h2 exit={{ y: -1000 }}>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>You ordered a {pizza && pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
        {pizza && pizza.toppings.map((topping) => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  );
};

export default Order;
