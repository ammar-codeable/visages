import { Star } from "lucide-react";
import { motion } from "motion/react";

type StarRatingProps = {
  rating: number;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const StarRating = ({ rating, size = "md", className = "" }: StarRatingProps) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  return (
    <div className={`flex gap-1.5 ${className}`}>
      {Array(rating).fill(0).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: i * 0.1
          }}
          whileHover={{ 
            rotate: 360, 
            scale: 1.2,
            transition: { duration: 0.3 }
          }}
          className="origin-center"
        >
          <Star
            className={`${sizeClasses[size]} fill-orange-400 text-orange-400 drop-shadow-lg`}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default StarRating;
