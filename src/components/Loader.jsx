import React from "react";
import { motion } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: { repeatType: "mirror", repeat: Infinity, duration: 0.5 },
      y: { repeatType: "mirror", repeat: Infinity, duration: 0.25, ease: "easeOut" },
    },
  },
};

const Loader = () => {
  return (
    <>
      <motion.div variants={loaderVariants} animate="animationOne" className="loader"></motion.div>
    </>
  );
};

export default Loader;
