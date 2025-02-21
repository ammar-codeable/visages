import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import EventCard from "@/components/EventCard";
import { Card } from "@/components/ui/card";
import { Event } from "@/constants/events";

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
    <Accordion type="single" collapsible defaultValue="dj-nights">
      <AccordionItem value="dj-nights" className="border-none">
        <Card className="mb-4 overflow-hidden bg-gradient-to-r from-purple-900 to-orange-900 shadow-xl">
          <AccordionTrigger className="group px-8 py-5 hover:no-underline">
            <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
              <div className="flex items-center gap-2">
                <h2 className="text-3xl font-bold text-white transition-colors group-hover:text-orange-200">
                  Pro Nights
                </h2>
                <span className="rounded-full bg-orange-500/20 px-3 py-1 text-sm font-medium text-orange-200">
                  Special Event
                </span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 gap-8 p-8 pt-2 md:grid-cols-2">
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
          </AccordionContent>
        </Card>
      </AccordionItem>
    </Accordion>
  </motion.div>
);
