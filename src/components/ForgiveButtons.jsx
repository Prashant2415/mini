import { useState } from "react";
import { motion } from "framer-motion";

// The "No" button dodges the mouse (or finger). The "Yes" button stays put.
export default function ForgiveButtons({ onYes }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const runAway = () => {
    // Random spot inside a safe range so it never leaves small screens.
    const maxX = Math.min(window.innerWidth / 2 - 110, 140);
    setPos({
      x: (Math.random() * 2 - 1) * maxX,
      y: (Math.random() * 2 - 1) * 90,
    });
  };

  return (
    <div className="forgive-area">
      <motion.button className="btn btn-pink" onClick={onYes} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }} animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 1.8 }}>
        Yes, I Do Forgive You 🥹💗
      </motion.button>

      <motion.button
        className="btn btn-no"
        animate={pos}
        transition={{ type: "spring", stiffness: 300, damping: 14 }}
        onMouseEnter={runAway}
        onTouchStart={(e) => { e.preventDefault(); runAway(); }}
        onFocus={runAway}
        onClick={runAway}
      >
        No, I Won't Accept Your Sorry 😤
      </motion.button>
    </div>
  );
}
