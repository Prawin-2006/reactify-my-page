import { motion } from "framer-motion";
import { Eye, MessageSquare, Brain, Volume2 } from "lucide-react";

type Easing = [number, number, number, number];
const easeIO: Easing = [0.42, 0, 0.58, 1];

/** Step 01 — Emotion Detection: face scan with landmark dots */
const EmotionDetectionIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Outer pulse rings */}
    <motion.div
      className="absolute w-32 h-32 rounded-full border border-primary/20"
      animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: easeIO }}
    />
    <motion.div
      className="absolute w-24 h-24 rounded-full border border-primary/10"
      animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: easeIO, delay: 0.8 }}
    />

    {/* Face outline */}
    <motion.div
      className="relative w-20 h-24 rounded-[50%] border-2 border-primary/40"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: easeIO }}
    >
      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent"
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: [0, 0, 1, 1] }}
      />

      {/* Facial landmark dots */}
      {[
        { x: "30%", y: "35%" },
        { x: "70%", y: "35%" },
        { x: "50%", y: "50%" },
        { x: "35%", y: "70%" },
        { x: "50%", y: "72%" },
        { x: "65%", y: "70%" },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary"
          style={{ left: pos.x, top: pos.y }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: easeIO, delay: i * 0.3 }}
        />
      ))}
    </motion.div>

    <motion.div
      className="absolute -bottom-1 -right-1"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, type: "spring" }}
    >
      <Eye className="w-5 h-5 text-primary/60" />
    </motion.div>
  </div>
);

/** Step 02 — Language Understanding: text analysis waveform */
const LanguageUnderstandingIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="flex items-center gap-1 h-16">
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.div
          key={i}
          className="w-1 rounded-full bg-primary/50"
          style={{ height: 8 }}
          animate={{ scaleY: [1, 1.8 + Math.sin(i) * 0.8, 1] }}
          transition={{ duration: 0.5 + (i % 3) * 0.15, repeat: Infinity, ease: easeIO, delay: i * 0.08 }}
        />
      ))}
    </div>

    {["tone", "sentiment", "context"].map((word, i) => (
      <motion.span
        key={word}
        className="absolute text-[9px] tracking-widest uppercase text-primary/40 font-mono"
        style={{ top: `${20 + i * 28}%`, left: i % 2 === 0 ? "8%" : "62%" }}
        animate={{ opacity: [0, 0.6, 0], x: [0, i % 2 === 0 ? 6 : -6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.7, ease: easeIO }}
      >
        {word}
      </motion.span>
    ))}

    <motion.div
      className="absolute -bottom-1 -right-1"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, type: "spring" }}
    >
      <MessageSquare className="w-5 h-5 text-primary/60" />
    </motion.div>
  </div>
);

/** Step 03 — AI Response: neural network nodes */
const AIResponseIllustration = () => {
  const nodes = [
    { x: 20, y: 20 }, { x: 50, y: 10 }, { x: 80, y: 25 },
    { x: 15, y: 55 }, { x: 50, y: 50 }, { x: 85, y: 55 },
    { x: 30, y: 85 }, { x: 50, y: 90 }, { x: 70, y: 85 },
  ];

  const connections = [
    [0, 3], [0, 4], [1, 4], [1, 5], [2, 4], [2, 5],
    [3, 6], [3, 7], [4, 6], [4, 7], [4, 8], [5, 7], [5, 8],
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-28 h-28">
        {connections.map(([from, to], i) => (
          <motion.line
            key={i}
            x1={nodes[from].x} y1={nodes[from].y}
            x2={nodes[to].x} y2={nodes[to].y}
            stroke="hsl(var(--primary))"
            strokeWidth={0.5}
            animate={{ strokeOpacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, ease: easeIO }}
          />
        ))}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x} cy={node.y} r={2.5}
            fill="hsl(var(--primary))"
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: easeIO, delay: i * 0.3 }}
          />
        ))}
      </svg>

      <motion.div
        className="absolute -bottom-1 -right-1"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <Brain className="w-5 h-5 text-primary/60" />
      </motion.div>
    </div>
  );
};

/** Step 04 — Voice Output: sound wave ripples */
const VoiceOutputIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {[1, 2, 3].map((ring) => (
      <motion.div
        key={ring}
        className="absolute rounded-full border border-primary/20"
        style={{ width: `${ring * 32}px`, height: `${ring * 32}px` }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: ring * 0.4, ease: [0, 0, 0.58, 1] }}
      />
    ))}

    <motion.div
      className="relative z-10 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: easeIO }}
    >
      <Volume2 className="w-5 h-5 text-primary" />
    </motion.div>

    <div className="absolute right-2 flex flex-col gap-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="h-[2px] rounded-full bg-primary/30"
          style={{ width: 16 }}
          animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.15, ease: easeIO }}
        />
      ))}
    </div>
  </div>
);

export const pipelineIllustrations = [
  EmotionDetectionIllustration,
  LanguageUnderstandingIllustration,
  AIResponseIllustration,
  VoiceOutputIllustration,
];
