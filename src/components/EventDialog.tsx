import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Calendar, MapPin, Users, IndianRupee, Clock, Gift } from "lucide-react";
import StarRating from "./StarRating";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    capacity?: string;
    registrationFee: number;
    timeLimit?: string;
    paymentLink: string; 
    cashPrize: number;
  };
};

const EventDialog = ({ open, onOpenChange, event }: EventDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[95vh] flex flex-col overflow-hidden p-0">
        <div className="relative h-64 shrink-0 bg-orange-900">
          <img
            src={event.image}
            alt={event.title}
            className="h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex flex-col gap-4">
              <StarRating rating={event.rating} size="lg" />
              <h2 className="text-4xl font-bold text-white">{event.title}</h2>
            </div>
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-6 space-y-6">
            {/* Info Cards - Optimized Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {event.date && (
                <div className="flex items-center gap-3 rounded-lg bg-orange-50 p-3">
                  <Calendar className="h-6 w-6 text-orange-600" />
                  <div>
                    <p className="text-xs font-medium text-orange-600">Date</p>
                    <p className="text-sm text-orange-900">{event.date || 'TBA'}</p>
                  </div>
                </div>
              )}
              {event.venue && (
                <div className="flex items-center gap-3 rounded-lg bg-orange-50 p-3">
                  <MapPin className="h-6 w-6 text-orange-600" />
                  <div>
                    <p className="text-xs font-medium text-orange-600">Venue</p>
                    <p className="text-sm text-orange-900">{event.venue}</p>
                  </div>
                </div>
              )}
              {event.registrationFee >= 0 && (
                <div className="flex items-center gap-3 rounded-lg bg-orange-50 p-3">
                  <IndianRupee className="h-6 w-6 text-orange-600" />
                  <div>
                    <p className="text-xs font-medium text-orange-600">Registration Fee</p>
                    <p className="text-sm text-orange-900">
                      ₹{event.registrationFee || 'Free'}
                    </p>
                  </div>
                </div>
              )}
              {event.capacity && (
                <div className="flex items-center gap-3 rounded-lg bg-orange-50 p-3">
                  <Users className="h-6 w-6 text-orange-600" />
                  <div>
                    <p className="text-xs font-medium text-orange-600">
                      Capacity
                    </p>
                    <p className="text-sm text-orange-900">
                      {event.capacity}
                    </p>
                  </div>
                </div>
              )}
              {event.timeLimit && (
                <div className="flex items-center gap-3 rounded-lg bg-orange-50 p-3">
                  <Clock className="h-6 w-6 text-orange-600" />
                  <div>
                    <p className="text-xs font-medium text-orange-600">Time Limit</p>
                    <p className="text-sm text-orange-900">{event.timeLimit}</p>
                  </div>
                </div>
              )}
              {(
                <div className="flex items-center gap-3 rounded-lg bg-orange-50 p-3">
                  <Gift className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="text-xs font-medium text-green-600">Cash Prize</p>
                    <p className="text-sm text-green-700">₹{event.cashPrize}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Content Sections with Optimized Spacing */}
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="mb-2 text-lg font-semibold text-orange-900">
                  About This Event
                </h3>
                <p className="text-sm leading-relaxed text-orange-800">
                  {event.description}
                </p>
              </div>

              {event.rules.length > 0 && (
                <div className="rounded-lg border border-orange-100 bg-orange-50/50 p-5">
                  <h3 className="mb-3 text-lg font-semibold text-orange-900">
                    Event Rules
                  </h3>
                  <ul className="grid gap-3 sm:grid-cols-2 min-h-[150px]">
                    {event.rules.map((rule, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-400 shrink-0" />
                        <span className="text-sm text-orange-700 leading-relaxed">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </ScrollArea>

        {/* Fixed Footer */}
        <div className="border-t border-orange-100 bg-white p-4 shrink-0">
          <div className="flex gap-3">
            {event.paymentLink ? (
              <a
                href={event.paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  size="lg"
                  className="w-full bg-orange-500 text-white hover:bg-orange-600"
                >
                  Register Now
                </Button>
              </a>
            ) : (
              <Button
                size="lg"
                className="flex-1 bg-orange-500 text-white hover:bg-orange-600"
                disabled
              >
                Register Now
              </Button>
            )}
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
