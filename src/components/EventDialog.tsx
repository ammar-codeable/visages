import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Calendar, MapPin, Star, Users } from "lucide-react";

type EventDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  event: {
    title: string;
    date: string;
    venue: string;
    image: string;
    description: string;
    rating: number;
    rules: string[];
    capacity?: number;
  };
};

const EventDialog = ({ open, onOpenChange, event }: EventDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl overflow-hidden p-0">
        {/* Hero Image Section */}
        <div className="relative h-64">
          <img
            src={event.image}
            alt={event.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

          {/* Rating & Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">{event.title}</h2>
              <div className="flex gap-1">
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
          </div>
        </div>

        <div className="p-6">
          {/* Info Cards */}
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            <div className="flex items-center gap-3 rounded-lg bg-orange-50 p-4">
              <Calendar className="h-6 w-6 text-orange-600" />
              <div>
                <p className="text-sm font-medium text-orange-600">Date</p>
                <p className="text-orange-900">{event.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-orange-50 p-4">
              <MapPin className="h-6 w-6 text-orange-600" />
              <div>
                <p className="text-sm font-medium text-orange-600">Venue</p>
                <p className="text-orange-900">{event.venue}</p>
              </div>
            </div>
            {event.capacity && (
              <div className="flex items-center gap-3 rounded-lg bg-orange-50 p-4">
                <Users className="h-6 w-6 text-orange-600" />
                <div>
                  <p className="text-sm font-medium text-orange-600">
                    Capacity
                  </p>
                  <p className="text-orange-900">
                    {event.capacity} Participants
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="mb-3 text-xl font-semibold text-orange-900">
              About This Event
            </h3>
            <p className="leading-relaxed text-orange-800">
              {event.description}
            </p>
          </div>

          {/* Rules Section */}
          <div className="mb-8 rounded-lg border border-orange-100 bg-orange-50/50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-orange-900">
              Event Rules
            </h3>
            <ul className="grid gap-3 md:grid-cols-2">
              {event.rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400" />
                  <span className="text-orange-700">{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              size="lg"
              className="flex-1 bg-orange-500 text-white hover:bg-orange-600"
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-200 text-orange-700 hover:bg-orange-50"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventDialog;
