import React from "react";
import { useNavigate } from "react-router-dom";
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
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const buttonVariants = {
  hover: {
    originX: 0,
    scale: 1.3,
    color: "#f8e112",
    type: "spring",
    stiffness: 300,
  },

  whilehover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      repeatType: "mirror",
      repeat: Infinity,
    },
  },
};

const nextVariant = {
  initial: { x: "-100vw" },
  final: { x: 0, transition: { type: "spring", stiffness: 120 } },
};

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];
  const navigate = useNavigate();

  return (
    <motion.div
      variants={containerVariant}
      initial="initial"
      animate="final"
      exit="exit"
      className="base container"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza && pizza.base === base ? "active" : "";
          return (
            <motion.li
              variants={buttonVariants}
              whileHover="hover"
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza && pizza.base && (
        <motion.div variants={nextVariant} className="next" initial="initial" animate="final">
          <motion.button
            variants={buttonVariants}
            whileHover="whilehover"
            onClick={() => navigate("/toppings")}
          >
            Next
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
