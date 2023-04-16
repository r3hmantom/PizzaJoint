import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import React from "react";

const backdrop = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
  },
};

const modal = {
  initial: { y: "-100vh", opacity: 0 },
  final: { y: 200, opacity: 1, transition: { delay: 0.5 } },
};

function Modal({ showModal, setShowModal }) {
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div variants={backdrop} className="backdrop" initial="initial" animate="final">
          <motion.div className="modal" variants={modal}>
            <p>Want to make another pizza?</p>
            <Link to="/">
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
