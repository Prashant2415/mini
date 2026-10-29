import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import Card from "./Card.jsx";

const COLORS = ["#ff8fb8", "#c9a8ff", "#ffffff", "#ffd1e3", "#ffe27a"];
const RAIN = ["💗", "🌸", "✨", "💖", "🌷", "🧸"];

export default function Celebration() {
  useEffect(() => {
    const end = Date.now() + 5000;
    const heart = confetti.shapeFromText ? confetti.shapeFromText({ text: "💗", scalar: 2 }) : "circle";

    const timer = setInterval(() => {
      if (Date.now() > end) return clearInterval(timer);
      confetti({ particleCount: 6, angle: 60, spread: 70, origin: { x: 0, y: 0.8 }, colors: COLORS, shapes: [heart, "circle"], scalar: 2 });
      confetti({ particleCount: 6, angle: 120, spread: 70, origin: { x: 1, y: 0.8 }, colors: COLORS, shapes: [heart, "circle"], scalar: 2 });
    }, 180);

    confetti({ particleCount: 160, spread: 120, origin: { y: 0.6 }, colors: COLORS });
    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="card-wide">
      <motion.div className="hero-emoji" animate={{ scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 1.2 }}>🎉</motion.div>
      <h1 className="title">YAYYYY! 🥹💗 You forgave me!</h1>
      <div className="letter">
        <p>Thank you for giving me another chance, pretty girl. You have the most beautiful smile, the sweetest heart, and a beauty that makes everything around you feel brighter. 🌸✨</p>
        <p>I'm truly sorry for my mistake, and I'll do my best to make things right. You mean so much to me, and I hope I can make you smile again. 💖</p>
        <p className="signature">Sending you the biggest virtual hug! 🧸💕</p>
      </div>
      <p className="compliment">You are so, so pretty. 🌷💗</p>
      <div className="rain" aria-hidden="true">
        {Array.from({ length: 24 }, (_, i) => (
          <span key={i} style={{ left: `${(i * 4.3) % 100}%`, animationDelay: `${(i % 8) * 0.4}s`, animationDuration: `${4 + (i % 5)}s` }}>
            {RAIN[i % RAIN.length]}
          </span>
        ))}
      </div>
    </Card>
  );
}
