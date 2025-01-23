import AnimatedBackground from "@/components/AnimatedBackground";
import ContingentBanner from "@/components/ContingentBanner";
import EventCard from "@/components/EventCard";
import StarRating from "@/components/StarRating";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Event, events } from "@/constants/events";
import { motion } from "motion/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

const EventsSection = ({
  rating,
  events,
  index,
  isOpenSection = false,
}: {
  rating: number;
  events: readonly Event[];
  index: number;
  isOpenSection?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    viewport={{ once: true }}
  >
    <AccordionItem value={`rating-${isOpenSection ? 'open' : rating}`} className="border-none">
      <Card className="mb-4 overflow-hidden bg-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white/90">
        <AccordionTrigger className="group px-8 py-5 hover:no-underline">
          <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl font-bold text-orange-900 transition-colors group-hover:text-orange-700">
                {isOpenSection ? "Open Events" : `${rating}-Star Events`}
              </h2>
              {!isOpenSection && (
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-5 w-5 text-orange-500 hover:text-orange-600" />
                    </TooltipTrigger>
                    <TooltipContent
                      className="border-orange-200 bg-gradient-to-r from-orange-50/95 via-orange-100/95 to-orange-50/95 text-orange-950 text-base"
                      sideOffset={4}
                    >
                      <p>Points distribution:</p>
                      <ul className="mt-1 list-disc pl-4">
                        <li>1st Place: {rating === 5 ? "1000" : rating === 4 ? "800" : "600"}</li>
                        <li>2nd Place: {rating === 5 ? "800" : rating === 4 ? "600" : "400"}</li>
                        <li>3rd Place: {rating === 5 ? "600" : rating === 4 ? "400" : "200"}</li>
                      </ul>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
            {!isOpenSection && <StarRating rating={rating} size="lg" />}
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 gap-8 p-8 pt-2 md:grid-cols-2 lg:grid-cols-4">
            {events
              .filter((e) => isOpenSection ? e.open : (!e.open && e.rating === rating))
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

const EventsList = () => (
  <Accordion type="single" collapsible>
    <EventsSection
      rating={0}
      events={events}
      index={0}
      isOpenSection={true}
    />
    {[5, 4, 3].map((rating, index) => (
      <EventsSection
        key={rating}
        rating={rating}
        events={events}
        index={index + 1}
      />
    ))}
  </Accordion>
);

const Events = () => (
  <div className="relative min-h-screen">
    <div className="fixed inset-0 bg-gradient-to-br from-orange-50 via-orange-100/50 to-orange-50">
      <AnimatedBackground />
    </div>

    <div className="relative z-10">
      {/* Page heading */}
      <div className="px-4 pb-8 pt-24">
        <div className="container relative mx-auto max-w-[90rem]">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="relative mb-4 inline-block text-5xl font-bold text-orange-900">
              Cultural Events
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-orange-400"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5 }}
              />
            </h1>
            <p className="mt-6 text-lg text-orange-700">
              Discover and participate in our exciting cultural events and
              competitions
            </p>
          </motion.div> 
        </div>
      </div>

      {/* Mobile Banner (non-sticky) */}
      <div className="px-4 md:hidden">
        <div className="container mx-auto max-w-[90rem]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <ContingentBanner variant="mobile" />
          </motion.div>
        </div>
      </div>

      {/* Desktop Sticky Banner */}
      <div className="sticky top-20 z-20 hidden px-4 md:block">
        <div className="container mx-auto max-w-[90rem]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <ContingentBanner variant="desktop" />
          </motion.div>
        </div>
      </div>

      {/* Events content */}
      <div className="px-4 py-8">
        <div className="container relative mx-auto max-w-[90rem]">
          <EventsList />
        </div>
      </div>
    </div>
  </div>
);

export default Events;
