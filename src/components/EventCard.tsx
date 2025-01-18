import { Calendar, MapPin, Star } from "lucide-react";
import { motion } from "motion/react";

interface Event {
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  rating: 3 | 4 | 5;
}

const EventCard = ({
  title,
  date,
  location,
  image,
  description,
  rating,
}: Event) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="group overflow-hidden rounded-xl border border-orange-100 bg-white/90 shadow-lg backdrop-blur"
  >
    <div className="relative overflow-hidden">
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        src={image}
        alt={title}
        className="h-56 w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute bottom-4 right-4 flex gap-1"
      >
        {Array(rating)
          .fill(0)
          .map((_, i) => (
            <Star
              key={i}
              className="h-5 w-5 fill-orange-400 text-orange-400 drop-shadow-lg"
            />
          ))}
      </motion.div>
    </div>
    <motion.div
      className="p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="mb-3 text-2xl font-semibold text-orange-900 transition-colors group-hover:text-orange-700">
        {title}
      </h2>
      <div className="mb-2 flex items-center gap-2 text-orange-700">
        <Calendar className="h-4 w-4" />
        <p className="text-sm">{date}</p>
      </div>
      <div className="mb-4 flex items-center gap-2 text-orange-700">
        <MapPin className="h-4 w-4" />
        <p className="text-sm">{location}</p>
      </div>
      <p className="line-clamp-2 text-orange-800/90">{description}</p>
    </motion.div>
  </motion.div>
);

export default EventCard;
