import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dayOneEvents, dayTwoEvents, onlineEvents } from "@/constants/schedule";
import { Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "motion/react";

type ScheduleDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const ScheduleDialog = ({ open, onOpenChange }: ScheduleDialogProps) => {
  const groupEventsByVenue = (events: typeof dayOneEvents) => {
    return events.reduce((acc, event) => {
      if (!acc[event.venue]) {
        acc[event.venue] = [];
      }
      acc[event.venue].push({ time: event.time, event: event.event });
      return acc;
    }, {} as Record<string, { time: string; event: string }[]>);
  };

  const day1ByVenue = groupEventsByVenue(dayOneEvents);
  const day2ByVenue = groupEventsByVenue(dayTwoEvents);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] max-w-4xl overflow-hidden p-0">
        <DialogHeader className="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
          <div className="flex items-center gap-3">
            <Calendar className="h-7 w-7 text-white" />
            <DialogTitle className="text-2xl font-bold text-white">
              Event Schedule
            </DialogTitle>
          </div>
        </DialogHeader>

        <Tabs defaultValue="day1" className="h-full">
          <TabsList className="w-full justify-start rounded-none border-b bg-orange-50/50 p-0">
            <TabsTrigger
              value="day1"
              className="rounded-none border-b-2 border-transparent px-6 py-3 data-[state=active]:border-orange-500 data-[state=active]:bg-white"
            >
              Day 1 - Feb 21st
            </TabsTrigger>
            <TabsTrigger
              value="day2"
              className="rounded-none border-b-2 border-transparent px-6 py-3 data-[state=active]:border-orange-500 data-[state=active]:bg-white"
            >
              Day 2 - Feb 22nd
            </TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[60vh]">
            <TabsContent value="day1" className="m-0 p-6">
              {Object.entries(day1ByVenue).map(([venue, events]) => (
                <motion.div
                  key={venue}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6"
                >
                  <div className="mb-3 flex items-center gap-2 text-orange-950">
                    <MapPin className="h-5 w-5" />
                    <h3 className="text-lg font-semibold">{venue}</h3>
                  </div>
                  <div className="grid gap-3">
                    {events.map((event, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 rounded-lg bg-orange-50/50 p-3"
                      >
                        <Clock className="h-5 w-5 text-orange-500" />
                        <span className="font-medium text-orange-900">
                          {event.time}
                        </span>
                        <span className="text-orange-700">{event.event}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="day2" className="m-0 p-6">
              {/* Online Events Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 rounded-lg bg-orange-100/50 p-4"
              >
                <h3 className="mb-2 font-semibold text-orange-900">
                  Online Events
                </h3>
                {onlineEvents.map((event, idx) => (
                  <div key={idx} className="text-orange-700">
                    {event.event} - {event.time}
                  </div>
                ))}
              </motion.div>

              {Object.entries(day2ByVenue).map(([venue, events]) => (
                <motion.div
                  key={venue}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6"
                >
                  <div className="mb-3 flex items-center gap-2 text-orange-950">
                    <MapPin className="h-5 w-5" />
                    <h3 className="text-lg font-semibold">{venue}</h3>
                  </div>
                  <div className="grid gap-3">
                    {events.map((event, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 rounded-lg bg-orange-50/50 p-3"
                      >
                        <Clock className="h-5 w-5 text-orange-500" />
                        <span className="font-medium text-orange-900">
                          {event.time}
                        </span>
                        <span className="text-orange-700">{event.event}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleDialog;
