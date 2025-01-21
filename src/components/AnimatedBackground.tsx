import { Camera, Compass, Globe, LucideIcon, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

type FloatingElement = {
  icon: LucideIcon;
  size: number;
  position: { x: number; y: number };
  delay: number;
};

const getScreenConfig = () => {
  const width = window.innerWidth;
  if (width < 640) { // mobile
    return {
      count: 6,
      minSize: 32,
      maxSize: 48
    };
  } else if (width < 1024) { // tablet
    return {
      count: 8,
      minSize: 40,
      maxSize: 64
    };
  } else { // desktop
    return {
      count: 14,
      minSize: 48,
      maxSize: 88
    };
  }
};

const generateElements = (): FloatingElement[] => {
  const icons = [Camera, Compass, MapPin, Globe];
  const config = getScreenConfig();
  
  return Array.from({ length: config.count }, (_, i) => ({
    icon: icons[i % icons.length],
    size: Math.random() * (config.maxSize - config.minSize) + config.minSize,
    position: {
      x: Math.random() * 85 + 5,
      y: Math.random() * 70 + 10,
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
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setElements(generateElements());
    };

    handleResize(); // Initial generation
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
