import { useMemo } from "react";

const ITEMS = ["💗", "💕", "🌸", "🧸", "✨", "🌷", "💖", "🦋", "🎀"];

// Emojis that slowly float up the screen (pure CSS animation).
export default function FloatingBackground({ count = 22 }) {
  const floaters = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        emoji: ITEMS[i % ITEMS.length],
        left: Math.random() * 100,
        size: 16 + Math.random() * 28,
        duration: 9 + Math.random() * 10,
        delay: -Math.random() * 18,
      })),
    [count]
  );

  return (
    <div className="floaters" aria-hidden="true">
      {floaters.map((f) => (
        <span
          key={f.id}
          style={{ left: `${f.left}%`, fontSize: f.size, animationDuration: `${f.duration}s`, animationDelay: `${f.delay}s` }}
        >
          {f.emoji}
        </span>
      ))}
    </div>
  );
}
