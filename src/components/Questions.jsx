import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Card from "./Card.jsx";
import { QUESTIONS } from "../config.js";

export default function Questions({ onDone }) {
  const [index, setIndex] = useState(0);
  const question = QUESTIONS[index];

  const next = () => (index + 1 < QUESTIONS.length ? setIndex(index + 1) : onDone());

  return (
    <Card>
      <p className="progress">{"💗".repeat(index + 1)}{"🤍".repeat(QUESTIONS.length - index - 1)}</p>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.35 }}
        >
          <h2 className="question">{question.text}</h2>
          <div className="answers">
            {question.answers.map((answer) => (
              <motion.button key={answer} className="btn btn-lavender" onClick={next} whileHover={{ scale: 1.07, rotate: -1.5 }} whileTap={{ scale: 0.94 }}>
                {answer}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </Card>
  );
}
