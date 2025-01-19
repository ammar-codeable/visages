import AnimatedBackground from "@/components/AnimatedBackground";
import EventCard from "@/components/EventCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { events, Event } from "@/constants/events";
import { Star } from "lucide-react";
import { motion } from "motion/react";

const EventsSection = ({
  rating,
  events,
  index,
}: {
  rating: number;
  events: readonly Event[];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    viewport={{ once: true }}
  >
    <AccordionItem value={`rating-${rating}`} className="border-none">
      <Card className="mb-4 overflow-hidden bg-white/80 backdrop-blur-sm">
        <AccordionTrigger className="px-6 py-3 hover:no-underline">
          <div className="flex items-center gap-3">
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
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 gap-8 p-6 pt-2 md:grid-cols-2 lg:grid-cols-3">
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
        </AccordionContent>
      </Card>
    </AccordionItem>
  </motion.div>
);

const Events = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="relative min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-orange-100/50 to-orange-50 px-4 py-20"
  >
    <AnimatedBackground />

    <div className="container relative mx-auto max-w-7xl">
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

      <Accordion type="multiple" defaultValue={["rating-5"]}>
        {[5, 4, 3].map((rating, index) => (
          <EventsSection
            key={rating}
            rating={rating}
            events={events}
            index={index}
          />
        ))}
      </Accordion>
    </div>
  </motion.div>
);

export default Events;
