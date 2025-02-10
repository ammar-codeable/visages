import { Card } from "@/components/ui/card";
import { Event } from "@/constants/events";
import { Banknote, Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import EventDialog from "./EventDialog";
import StarRating from "./StarRating";

const EventCard = ({
  title,
  date,
  venue,
  image,
  description,
  rating,
  rules,
  capacity,
  registrationFee,
  timeLimit,
  cashPrize,
  eventHeadName,
  eventHeadNumber,
  time,
}: Event) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Card
        className="group relative flex h-[30rem] cursor-pointer flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        onClick={() => setDialogOpen(true)}
      >
        <div className="relative h-56 shrink-0 overflow-hidden rounded-t-xl">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="relative h-56"
          >
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
          </motion.div>

          {/* Rating Badge */}
          <div className="absolute right-4 top-4 flex items-center rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-sm">
            <StarRating rating={rating} size="sm" />
          </div>
        </div>

        <div className="relative flex flex-1 flex-col bg-white/95 p-6 backdrop-blur-sm">
          <h2 className="mb-3 line-clamp-1 text-xl font-bold text-orange-900 transition-colors group-hover:text-orange-700">
            {title}
          </h2>

          <div className="mb-2 space-y-2">
            <div className="flex items-center gap-2 text-orange-700">
              <Calendar className="h-4 w-4" />
              <p className="text-sm font-medium">{date}</p>
            </div>
            <div className="flex items-center gap-2 text-orange-700">
              <MapPin className="h-4 w-4" />
              <p className="line-clamp-1 text-sm font-medium">{venue}</p>
            </div>
            {time && (
              <div className="flex items-center gap-2 text-orange-700">
                <Clock className="h-4 w-4" />
                <p className="text-sm font-medium">{time}</p>
              </div>
            )}
            {timeLimit && (
              <div className="flex items-center gap-2 text-orange-700">
                <Clock className="h-4 w-4" />
                <p className="text-sm font-medium">{timeLimit}</p>
              </div>
            )}
            {registrationFee > 0 && (
              <div className="flex items-center gap-2 text-orange-700">
                <Banknote className="h-4 w-4" />
                <p className="text-sm font-medium">₹{registrationFee}</p>
              </div>
            )}
          </div>

          <p className="line-clamp-2 flex-1 text-sm text-orange-800/90">
            {description}
          </p>

          {/* Hover effect overlay */}
          <div className="absolute inset-x-0 bottom-0 h-1 scale-x-0 transform bg-gradient-to-r from-orange-400 to-orange-600 transition-transform duration-300 group-hover:scale-x-100" />
        </div>
      </Card>

      <EventDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        event={{
          title,
          date,
          venue,
          image,
          description,
          rating,
          rules,
          capacity,
          registrationFee,
          timeLimit,
          cashPrize,
          eventHeadName,
          eventHeadNumber,
          time,
        }}
      />
    </>
  );
};

export default EventCard;
