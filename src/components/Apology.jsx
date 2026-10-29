import { motion } from "framer-motion";
import Card from "./Card.jsx";
import ForgiveButtons from "./ForgiveButtons.jsx";
import { APOLOGY, HER_NAME, MY_NAME } from "../config.js";

export default function Apology({ onForgive }) {
  return (
    <Card className="card-wide">
      <h2 className="title small">My Sorry Letter 💌</h2>
      <div className="letter">
        {APOLOGY.map((paragraph, i) => (
          <motion.p key={i} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.9 }}>
            {paragraph}
          </motion.p>
        ))}
        <motion.p className="signature" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + APOLOGY.length * 0.9 }}>
          Always yours, {MY_NAME} 🧸💗
        </motion.p>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 + APOLOGY.length * 0.9 }}>
        <p className="ask">So, {HER_NAME}… will you forgive me? 🥹</p>
        <ForgiveButtons onYes={onForgive} />
      </motion.div>
    </Card>
  );
}
