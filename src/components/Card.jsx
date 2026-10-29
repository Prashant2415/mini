import { motion } from "framer-motion";

// A reusable animated card that every screen sits inside.
export default function Card({ children, className = "" }) {
  return (
    <motion.section
      className={`card ${className}`}
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -40, scale: 0.92 }}
      transition={{ type: "spring", stiffness: 120, damping: 16 }}
    >
      {children}
    </motion.section>
  );
}
