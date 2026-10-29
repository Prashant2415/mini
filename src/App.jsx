import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import FloatingBackground from "./components/FloatingBackground.jsx";
import Welcome from "./components/Welcome.jsx";
import Questions from "./components/Questions.jsx";
import Apology from "./components/Apology.jsx";
import Celebration from "./components/Celebration.jsx";

// The story moves through these stages, one after another.
export default function App() {
  const [stage, setStage] = useState("welcome"); // welcome → questions → apology → celebration

  return (
    <div className="app">
      <FloatingBackground />
      <main className="stage">
        <AnimatePresence mode="wait">
          {stage === "welcome" && <Welcome key="welcome" onNext={() => setStage("questions")} />}
          {stage === "questions" && <Questions key="questions" onDone={() => setStage("apology")} />}
          {stage === "apology" && <Apology key="apology" onForgive={() => setStage("celebration")} />}
          {stage === "celebration" && <Celebration key="celebration" />}
        </AnimatePresence>
      </main>
    </div>
  );
}
