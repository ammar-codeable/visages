import { Sparkles } from "lucide-react";
import { motion } from "motion/react";

const SparkleIcon = () => (
  <div className="relative">
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1.5, 0.5],
        }}
        transition={{
          duration: 1.5,
          delay: i * 0.2,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      >
        <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-300" />
      </motion.div>
    ))}
    <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 relative z-10 text-yellow-400" />
  </div>
);

export default SparkleIcon;
