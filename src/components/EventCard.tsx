import { Calendar, MapPin, IndianRupee, Clock } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import EventDialog from "./EventDialog";
import { Event } from "@/constants/events";
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
  paymentLink
}: Event) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Card
        className="group relative flex h-[30rem] cursor-pointer flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
          </motion.div>
          
          {/* Rating Badge */}
          <div className="absolute top-4 right-4 flex items-center rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-sm">
            <StarRating rating={rating} size="sm" />
          </div>
        </div>

        <div className="relative flex flex-1 flex-col p-6 bg-white/95 backdrop-blur-sm">
          <h2 className="mb-3 text-xl font-bold text-orange-900 group-hover:text-orange-700 transition-colors line-clamp-1">
            {title}
          </h2>
          
          <div className="mb-2 space-y-2">
            <div className="flex items-center gap-2 text-orange-700">
              <Calendar className="h-4 w-4" />
              <p className="text-sm font-medium">{date}</p>
            </div>
            <div className="flex items-center gap-2 text-orange-700">
              <MapPin className="h-4 w-4" />
              <p className="text-sm font-medium line-clamp-1">{venue}</p>
            </div>
            {timeLimit && (
              <div className="flex items-center gap-2 text-orange-700">
                <Clock className="h-4 w-4" />
                <p className="text-sm font-medium">{timeLimit}</p>
              </div>
            )}
            {registrationFee > 0 && (
              <div className="flex items-center gap-2 text-orange-700">
                <IndianRupee className="h-4 w-4" />
                <p className="text-sm font-medium">₹{registrationFee}</p>
              </div>
            )}
          </div>
          
          <p className="flex-1 text-sm text-orange-800/90 line-clamp-2">
            {description}
          </p>

          {/* Hover effect overlay */}
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
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
          paymentLink
        }}
      />
    </>
  );
};

export default EventCard;
