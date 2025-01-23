import { motion } from "motion/react";

const FancyText = () => (
  <div className="w-full">
    <motion.svg
      viewBox="0 0 800 100"
      className="w-full max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>

      {/* Text elements with larger font size */}
      <motion.text
        x="50%"
        y="55%"
        textAnchor="middle"
        dominantBaseline="middle"
        style={{
          fill: "transparent",
          stroke: "url(#gradient)",
          strokeWidth: "1",
          fontFamily: "Satisfy, cursive",
          fontSize: "3.8em",
        }}
        initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        Around the World in Two Days
      </motion.text>

      <motion.text
        x="50%"
        y="55%"
        textAnchor="middle"
        dominantBaseline="middle"
        style={{
          fill: "url(#gradient)",
          fontFamily: "Satisfy, cursive",
          fontSize: "3.8em",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Around the World in Two Days
      </motion.text>
      
      {/* Bottom decorative swash with more curves */}
      <motion.path
        d="M180,85 
           C250,85 270,75 300,75 
           S350,85 400,85 
           S450,75 500,75 
           S550,85 620,85"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}
      />
    </motion.svg>
  </div>
);

export default FancyText;
