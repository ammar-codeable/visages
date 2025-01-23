import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { events } from "@/constants/events";
import { cn } from "@/utils/cn";
import { IndianRupee, MapPin, Search, Star, Users } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { Button } from "./ui/button";

const SearchDialog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);

  const filteredEvents = events.filter((event) => {
    const searchTerms = searchQuery.toLowerCase().split(" ");
    return searchTerms.every(
      (term) =>
        event.title.toLowerCase().includes(term) ||
        event.description.toLowerCase().includes(term) ||
        (event.venue && event.venue.toLowerCase().includes(term)),
    );
  });

  // Group events by rating
  const groupedEvents = filteredEvents.reduce(
    (acc, event) => {
      const rating = event.rating;
      if (!acc[rating]) acc[rating] = [];
      acc[rating].push(event);
      return acc;
    },
    {} as Record<number, typeof events>,
  );

  const ratings = Object.keys(groupedEvents).sort(
    (a, b) => Number(b) - Number(a),
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="sm:size-icon group relative w-full justify-start text-orange-950 hover:bg-orange-200/60 hover:text-orange-700 sm:w-auto"
        >
          <Search className="ease-spring h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
          <span className="ml-2 sm:hidden">Search Events</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="gap-0 p-0 sm:max-w-[500px]">
        <DialogHeader className="border-b border-orange-100 bg-gradient-to-r from-orange-50 via-white to-orange-50 px-4 py-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-orange-400 transition-colors duration-200 group-focus-within:text-orange-600" />
            <Input
              placeholder="Search events by name, description, or venue..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border-orange-200 pl-9 placeholder:text-orange-400 focus:border-orange-400 focus:ring-orange-400"
              autoFocus
            />
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] overflow-y-auto px-2">
          {ratings.length > 0 ? (
            <div className="space-y-4 p-2">
              {ratings.map((rating) => (
                <div key={rating} className="space-y-2">
                  <div className="sticky top-0 z-20 -mx-2 bg-white/95 px-2 pb-2 pt-2 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <div
                        className={cn(
                          "rounded-full px-2 py-1 text-xs font-semibold",
                          Number(rating) === 0
                            ? "bg-blue-100 text-blue-700"
                            : "bg-orange-100 text-orange-700",
                        )}
                      >
                        {Number(rating) === 0
                          ? "Open Events"
                          : `${rating}-Star Events`}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {groupedEvents[rating as unknown as number].map((event) => (
                      <Link
                        key={event.title}
                        to={`/events`}
                        onClick={() => setOpen(false)}
                        className="group flex items-start gap-3 rounded-lg p-2 transition-all hover:bg-orange-100/80"
                      >
                        <div className="relative h-16 w-16 flex-none overflow-hidden rounded-md">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          {event.rating > 0 && (
                            <div className="absolute bottom-0 right-0 flex items-center gap-0.5 rounded-tl-md bg-black/60 px-1 py-0.5">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs font-bold text-white">
                                {event.rating}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex-1 space-y-1 overflow-hidden py-0.5">
                          <div className="truncate font-medium text-orange-950 group-hover:text-orange-700">
                            {event.title}
                          </div>
                          <div className="line-clamp-2 text-xs text-orange-600/90">
                            {event.description}
                          </div>
                          <div className="flex flex-wrap gap-2 pt-1">
                            {event.venue && (
                              <div className="flex items-center gap-1 text-xs text-orange-600">
                                <MapPin className="h-3 w-3" />
                                <span>{event.venue}</span>
                              </div>
                            )}
                            {event.capacity && (
                              <div className="flex items-center gap-1 text-xs text-orange-600">
                                <Users className="h-3 w-3" />
                                <span>{event.capacity}</span>
                              </div>
                            )}
                            <div className="flex items-center gap-1 text-xs font-medium">
                              <IndianRupee className="h-3 w-3" />
                              <span
                                className={
                                  event.registrationFee
                                    ? "text-orange-600"
                                    : "text-green-600"
                                }
                              >
                                {event.registrationFee || "Free Entry"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 py-12 text-center">
              <Search className="h-12 w-12 text-orange-300" />
              <div>
                <div className="text-sm font-medium text-orange-800">
                  No events found for "{searchQuery}"
                </div>
                <div className="mt-1 text-xs text-orange-600">
                  Try searching for different terms
                </div>
              </div>
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
