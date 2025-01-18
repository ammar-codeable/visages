import { Camera, Compass, Globe, LucideIcon, MapPin } from "lucide-react";
import { motion } from "motion/react";

type FloatingElement = {
  icon: LucideIcon;
  size: number;
  position: { x: number; y: number };
  delay: number;
};

const generateElements = (count: number): FloatingElement[] => {
  const icons = [Camera, Compass, MapPin, Globe];
  return Array.from({ length: count }, (_, i) => ({
    icon: icons[i % icons.length],
    size: Math.random() * 40 + 48, // 48-88px
    position: {
      x: Math.random() * 85 + 5, // 5-90%
      y: Math.random() * 70 + 10, // 10-80%
    },
    delay: Math.random() * 2,
  }));
};

const FloatingIcon = ({ element }: { element: FloatingElement }) => {
  const Icon = element.icon;

  return (
    <motion.div
      className="absolute text-orange-500/30"
      style={{
        left: `${element.position.x}%`,
        top: `${element.position.y}%`,
      }}
      animate={{
        y: ["0%", "-100%", "0%"],
        x: ["0%", "50%", "0%"],
        scale: [1, 1.2, 1],
        rotate: [0, 45, -45, 0],
      }}
      transition={{
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: element.delay,
      }}
    >
      <Icon size={element.size} strokeWidth={1} />
    </motion.div>
  );
};

const AnimatedBackground = () => {
  const elements = generateElements(12);

  return (
    <>
      <div className="absolute inset-0" aria-hidden="true">
        {elements.map((element, i) => (
          <FloatingIcon key={i} element={element} />
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/90 via-transparent to-orange-50/90" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-orange-50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-orange-50 to-transparent" />
    </>
  );
};

export default AnimatedBackground;
