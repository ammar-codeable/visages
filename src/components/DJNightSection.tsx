import EventCard from "@/components/EventCard";
import { Event } from "@/constants/events";
import { motion } from "motion/react";

export const DJNightSection = ({
  events,
  index,
}: {
  events: readonly Event[];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    viewport={{ once: true }}
    className="w-full"
  >
    <div className="mb-8">
      <div className="flex items-center gap-2">
        <h2 className="text-3xl font-bold text-white">Pro Nights</h2>
        <span className="rounded-full bg-orange-500/20 px-3 py-1 text-sm font-medium text-orange-200">
          Special Event
        </span>
      </div>

      {/* Add the new info section */}
      <div className="mt-4 rounded-lg bg-white/10 p-4 text-orange-200">
        <p className="text-sm">
          👋 Once you register, you can collect your wristbands from the
          registration desks upon arrival. Entry will only be allowed post 4:30
          PM.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {events
        .filter((e) => e.title.toLowerCase().includes("pro night"))
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
