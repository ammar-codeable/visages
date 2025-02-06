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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Event, events } from "@/constants/events";
import { Info, QrCode } from "lucide-react";
import { motion } from "motion/react";

// Add this new component for DJ Night section
const DJNightSection = ({
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
  >
    <AccordionItem value="dj-nights" className="border-none">
      <Card className="mb-4 overflow-hidden bg-gradient-to-r from-purple-900/80 to-orange-900/80 backdrop-blur-sm transition-all duration-300 hover:from-purple-900/90 hover:to-orange-900/90">
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
              .filter((e) => e.title.includes("Pro Night"))
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
    <AccordionItem
      value={`rating-${isOpenSection ? "open" : rating}`}
      className="border-none"
    >
      <Card className="mb-4 overflow-hidden bg-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white/90">
        <AccordionTrigger className="group px-8 py-5 hover:no-underline">
          <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl font-bold text-orange-900 transition-colors group-hover:text-orange-700">
                {isOpenSection ? "Open Events" : `${rating}-Star Events`}
              </h2>
              {!isOpenSection && (
                <>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="hidden md:inline-flex">
                        <Info className="h-5 w-5 text-orange-500 hover:text-orange-600" />
                      </TooltipTrigger>
                      <TooltipContent
                        className="border-orange-200 bg-gradient-to-r from-orange-50/95 via-orange-100/95 to-orange-50/95 text-base text-orange-950"
                        sideOffset={4}
                      >
                        <p>Points distribution:</p>
                        <ul className="mt-1 list-disc pl-4">
                          <li>
                            1st Place:{" "}
                            {rating === 5 ? "100" : rating === 4 ? "80" : "60"}
                          </li>
                          <li>
                            2nd Place:{" "}
                            {rating === 5 ? "80" : rating === 4 ? "60" : "40"}
                          </li>
                          <li>
                            3rd Place:{" "}
                            {rating === 5 ? "60" : rating === 4 ? "40" : "20"}
                          </li>
                        </ul>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </>
              )}
            </div>
            {!isOpenSection && <StarRating rating={rating} size="lg" />}
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 gap-8 p-8 pt-2 md:grid-cols-2 lg:grid-cols-4">
            {events
              .filter((e) =>
                isOpenSection
                  ? e.open && !e.title.includes("Pro Night") // Add this condition
                  : !e.open && e.rating === rating,
              )
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
    <DJNightSection events={events} index={0} />
    <EventsSection rating={0} events={events} index={1} isOpenSection={true} />
    {[5, 4, 3].map((rating, index) => (
      <EventsSection
        key={rating}
        rating={rating}
        events={events}
        index={index + 2}
      />
    ))}
  </Accordion>
);

const RegistrationProcess = () => (
  <div className="relative bg-orange-50 px-4 py-12">
    <div className="container mx-auto max-w-[90rem]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-orange-900">
          How to Register for Events
        </h2>
        <p className="mt-2 text-lg text-orange-700">
          Follow these simple steps to participate in our events.
        </p>
      </motion.div>

      <div className="mt-16 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
        {/* Registration steps grid */}
        <motion.div
          className="grid w-full grid-cols-1 gap-8 md:w-2/3 md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            {
              step: "1",
              title: "Explore Events",
              description:
                "Browse through our list of cultural events and choose the one you're most excited about.",
            },
            {
              step: "2",
              title: "Complete Registration",
              description:
                "Pay the registration fee, take a screenshot of your payment information, and fill out the registration form with your details.",
            },
            {
              step: "3",
              title: "Confirm Participation",
              description:
                "HOORAH!! You can now participate and experience the fantabulous event.",
            },
          ].map((item, idx) => (
            <Card
              key={idx}
              className="rounded-2xl bg-white p-6 shadow-md transition-transform hover:scale-105"
            >
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-2xl font-bold text-orange-900">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-orange-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-base text-orange-600">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </motion.div>

        {/* QR Code Section */}
        <motion.div
          className="w-full md:w-1/3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4">
              <div className="flex items-center gap-2 text-white">
                <QrCode className="h-5 w-5" />
                <h3 className="text-lg font-semibold">Payment Details</h3>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 p-6">
              <div className="relative aspect-square w-48">
                <img
                  src="/visages-qr-code.jpg" // Add your QR code image to public folder
                  alt="Payment QR Code"
                  className="rounded-lg border-2 border-orange-100 p-2"
                />
                <motion.div
                  className="absolute inset-0 rounded-lg bg-orange-500/10"
                  animate={{
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
              </div>

              <p className="mt-2 text-xs text-orange-500">
                * Screenshot your payment for verification
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  </div>
);

const Events = () => {
  return (
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

        {/* Registration Process Section */}
        <RegistrationProcess />
      </div>
    </div>
  );
};

export default Events;
