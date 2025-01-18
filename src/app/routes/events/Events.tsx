import { Star } from "lucide-react";
import { motion } from "motion/react";
import EventCard from "../../../components/EventCard";
import { events } from "@/constants/events";

const EventsSection = ({
  rating,
  events,
  index,
}: {
  rating: number;
  events: typeof events;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    viewport={{ once: true }}
    className="mb-16"
  >
    <div className="relative mb-8">
      <motion.div
        className="inline-block flex items-center gap-3 rounded-full bg-white/80 px-6 py-3 shadow-sm backdrop-blur-sm"
        whileHover={{ scale: 1.02 }}
      >
        <h2 className="text-2xl font-semibold text-orange-900">
          {rating}-Star Events
        </h2>
        <div className="flex gap-1">
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-orange-400 text-orange-400"
              />
            ))}
        </div>
      </motion.div>
    </div>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {events
        .filter((e) => e.rating === rating)
        .map((event, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <EventCard {...event} />
          </motion.div>
        ))}
    </div>
  </motion.div>
);

const Events = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100/50 to-orange-50 px-4 py-20"
  >
    <div className="container mx-auto max-w-7xl">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="relative mb-4 inline-block text-5xl font-bold text-orange-900">
          Upcoming Events
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-orange-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5 }}
          />
        </h1>
        <p className="mt-6 text-lg text-orange-700">
          Discover and join our premium photography events and workshops
        </p>
      </motion.div>

      {[5, 4, 3].map((rating, index) => (
        <EventsSection
          key={rating}
          rating={rating}
          events={events}
          index={index}
        />
      ))}
    </div>
  </motion.div>
);

export default Events;
