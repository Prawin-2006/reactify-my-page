import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EyeRevealSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  // Circle expands from 0% to 150% (overshoot to cover corners)
  const clipRadius = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const contentScale = useTransform(scrollYProgress, [0, 0.8], [0.8, 1]);

  return (
    <section
      ref={sectionRef}
      id="vision"
      className="relative min-h-screen flex flex-col justify-center"
    >
      {/* Circular reveal mask */}
      <motion.div
        className="absolute inset-0 bg-background z-10"
        style={{
          clipPath: useTransform(clipRadius, (r) => `circle(${r} at 50% 50%)`),
        }}
      />

      {/* Content inside the reveal */}
      <motion.div
        className="relative z-20 py-24 px-4 md:px-12 w-full max-w-7xl mx-auto"
        style={{
          opacity: contentOpacity,
          scale: contentScale,
        }}
      >
        <div className="flex flex-col items-center text-center gap-12">
          <div className="space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 py-1 px-4 border border-primary/20 bg-primary/5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-primary">
                Inside the Vision
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-foreground leading-[1.1] uppercase">
              See Through<br />Our Eyes
            </h2>
            <p className="text-muted-foreground font-light text-base md:text-lg tracking-wide leading-relaxed mx-auto max-w-lg">
              Step inside our perspective. Every pixel, every interaction, every moment is crafted with intention — designed to transform the way you experience the digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mt-8">
            {[
              { number: "01", title: "Perceive", desc: "We see the invisible threads connecting your brand to its audience." },
              { number: "02", title: "Conceive", desc: "Ideas take shape through collaborative exploration and bold experimentation." },
              { number: "03", title: "Achieve", desc: "Execution with surgical precision, delivering experiences that transcend." },
            ].map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
                className="border border-border rounded-2xl p-8 text-left space-y-4 hover:border-primary/30 transition-colors"
              >
                <span className="text-4xl font-display font-bold text-primary/20">{item.number}</span>
                <h3 className="font-display text-lg tracking-widest uppercase font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EyeRevealSection;
