import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar, MapPin, Star } from "lucide-react";

type EventDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  event: {
    title: string;
    date: string;
    location: string;
    image: string;
    description: string;
    rating: number;
  };
};

const EventDialog = ({ open, onOpenChange, event }: EventDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <div className="relative -m-6 mb-0 h-48 overflow-hidden rounded-t-lg">
          <img
            src={event.image}
            alt={event.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 right-4 flex gap-1">
            {Array(event.rating)
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-orange-400 text-orange-400"
                />
              ))}
          </div>
        </div>

        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-orange-900">
            {event.title}
          </DialogTitle>
          <DialogDescription className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-orange-700">
              <Calendar className="h-4 w-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-orange-700">
              <MapPin className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2 text-gray-700">
          <p className="leading-relaxed">{event.description}</p>
        </div>

        <DialogFooter className="mt-6">
          <Button
            size="lg"
            className="bg-orange-500 text-white hover:bg-orange-600"
            onClick={() => onOpenChange(false)}
          >
            Register Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EventDialog;
