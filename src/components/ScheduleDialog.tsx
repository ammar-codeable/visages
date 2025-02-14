import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { bgmiEvent, dayOneEvents, dayTwoEvents } from "@/constants/schedule";
import { Calendar, ArrowUpDown } from "lucide-react";
import { useState } from "react";

// Add this helper function for time conversion
const convertTo24Hour = (timeStr: string) => {
  if (!timeStr) return "23:59"; // Push empty times to the end
  const [time, meridiem] = timeStr.split(" ");
  if (!meridiem) return timeStr; // Return as is if no AM/PM

  let [hours, minutes] = time.split(":").map(Number);
  if (meridiem === "PM" && hours !== 12) hours += 12;
  if (meridiem === "AM" && hours === 12) hours = 0;
  
  return `${hours.toString().padStart(2, "0")}:${minutes ? minutes.toString().padStart(2, "0") : "00"}`;
};

type SortConfig = {
  key: "time" | "venue";
  direction: "asc" | "desc";
};

type ScheduleDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const EventsTable = ({ 
  events,
  sortConfig,
  onSortChange
}: { 
  events: typeof dayOneEvents;
  sortConfig: SortConfig;
  onSortChange: (key: SortConfig["key"]) => void;
}) => {
  const sortedEvents = [...events].sort((a, b) => {
    if (sortConfig.key === "time") {
      const timeA = convertTo24Hour(a.time);
      const timeB = convertTo24Hour(b.time);
      return sortConfig.direction === "asc" 
        ? timeA.localeCompare(timeB)
        : timeB.localeCompare(timeA);
    }
    return sortConfig.direction === "asc"
      ? a[sortConfig.key].localeCompare(b[sortConfig.key])
      : b[sortConfig.key].localeCompare(a[sortConfig.key]);
  });

  return (
    <div className="w-full">
      <table className="w-full border-collapse">
        <thead className="sticky top-0 bg-white">
          <tr className="border-b-2 border-orange-200">
            <th className="bg-orange-50/80">
              <button
                onClick={() => onSortChange("time")}
                className="flex w-full items-center gap-2 px-6 py-4 text-left font-bold text-orange-950 hover:text-orange-600"
              >
                Time
                <ArrowUpDown className="h-4 w-4" />
              </button>
            </th>
            <th className="bg-orange-50/80">
              <button
                onClick={() => onSortChange("venue")}
                className="flex w-full items-center gap-2 px-6 py-4 text-left font-bold text-orange-950 hover:text-orange-600"
              >
                Venue
                <ArrowUpDown className="h-4 w-4" />
              </button>
            </th>
            <th className="bg-orange-50/80 px-6 py-4 text-left font-bold text-orange-950">
              Event
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedEvents.map((event, index) => (
            <tr 
              key={index}
              className="border-b border-orange-100 transition-colors hover:bg-orange-50/50"
            >
              <td className="whitespace-nowrap px-6 py-4 font-medium text-orange-900">
                {event.time || "TBA"}
              </td>
              <td className="px-6 py-4 text-orange-800">
                {event.venue || "-"}
              </td>
              <td className="px-6 py-4 text-orange-800">
                {event.event}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ScheduleDialog = ({ open, onOpenChange }: ScheduleDialogProps) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: "venue", direction: "asc" });

  const handleSort = (key: SortConfig["key"]) => {
    setSortConfig(current => ({
      key,
      direction: current.key === key && current.direction === "asc" ? "desc" : "asc"
    }));
  };

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
          <p className="mt-2 text-sm text-orange-100">
            *Schedule is subject to change based on number of participants
          </p>
        </DialogHeader>

        <div className="border-b border-orange-200 bg-orange-50/50 p-4">
          <h3 className="mb-2 text-sm font-semibold text-orange-800">Pre-Events - February 20</h3>
          <table className="w-full border-collapse">
            <tbody>
              <tr className="rounded-lg bg-orange-100/50">
                <td className="whitespace-nowrap px-6 py-3 font-medium text-orange-900">
                  {bgmiEvent.time}
                </td>
                <td className="px-6 py-3 text-orange-800">
                  {bgmiEvent.venue}
                </td>
                <td className="px-6 py-3 text-orange-800">
                  {bgmiEvent.event}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

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

          <ScrollArea className="h-[calc(60vh-5rem)]">
            <TabsContent value="day1" className="m-0">
              <EventsTable 
                events={dayOneEvents} 
                sortConfig={sortConfig}
                onSortChange={handleSort}
              />
            </TabsContent>

            <TabsContent value="day2" className="m-0">
              <EventsTable 
                events={dayTwoEvents}
                sortConfig={sortConfig}
                onSortChange={handleSort}
              />
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleDialog;
