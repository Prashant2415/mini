import { motion } from "framer-motion";
import Card from "./Card.jsx";
import { HER_NAME } from "../config.js";

export default function Welcome({ onNext }) {
  return (
    <Card>
      <motion.div className="hero-emoji" animate={{ y: [0, -14, 0], rotate: [-6, 6, -6] }} transition={{ repeat: Infinity, duration: 2.6 }}>
        🧸
      </motion.div>
      <h1 className="title">Hey, {HER_NAME}! 🥺💕</h1>
      <p className="subtitle">I made something small, just for you.</p>
      <motion.button className="btn btn-pink" onClick={onNext} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
        Open This, Please 🥹
      </motion.button>
    </Card>
  );
}
