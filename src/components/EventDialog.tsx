import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { comboOffers } from "@/constants/events";
import {
  Banknote,
  Calendar,
  Clock,
  Clock as ClockIcon,
  Gift,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import StarRating from "./StarRating";

const REGULAR_REGISTRATION_LINK = "https://forms.gle/hHrKFT98h25tpkV98";
const PRO_NIGHT_REGISTRATION_LINK = "https://forms.gle/DoHTWrgqXAM2szLQA"; // Replace with actual pro night form link

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
    cashPrize?: number;
    eventHeadName: string;
    eventHeadNumber: string;
    time: string; // Changed from optional to required
  };
};

const EventDialog = ({ open, onOpenChange, event }: EventDialogProps) => {
  const hasComboOffer = comboOffers.some((offer) =>
    offer.events.includes(event.title),
  );

  const comboOffer = comboOffers.find((offer) =>
    offer.events.includes(event.title),
  );

  const isProNight = event.title.includes("Pro Night");
  const registrationLink = isProNight
    ? PRO_NIGHT_REGISTRATION_LINK
    : REGULAR_REGISTRATION_LINK;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex h-[95vh] max-w-4xl flex-col overflow-hidden p-0">
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
          <div className="space-y-6 p-6">
            {/* Info Cards - Optimized Grid */}
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
              {event.date && (
                <div className="flex items-center gap-3 rounded-lg bg-orange-50 p-3">
                  <Calendar className="h-6 w-6 text-orange-600" />
                  <div>
                    <p className="text-xs font-medium text-orange-600">Date</p>
                    <p className="text-sm text-orange-900">
                      {event.date || "TBA"}
                    </p>
                  </div>
                </div>
              )}
              {event.time && (
                <div className="flex items-center gap-3 rounded-lg bg-orange-50 p-3">
                  <ClockIcon className="h-6 w-6 text-orange-600" />
                  <div>
                    <p className="text-xs font-medium text-orange-600">Time</p>
                    <p className="text-sm text-orange-900">{event.time}</p>
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
              {hasComboOffer && (
                <div className="mt-4 rounded-lg bg-orange-100 p-4">
                  <h4 className="font-medium text-orange-900">
                    Special Combo Offer!
                  </h4>
                  <p className="mt-1 text-sm text-orange-700">
                    {comboOffer?.description}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-lg font-bold text-orange-900">
                      ₹{comboOffer?.offerPrice}
                    </span>
                    <span className="text-sm text-orange-700 line-through">
                      ₹{comboOffer?.originalPrice}
                    </span>
                    <span className="ml-1 rounded-full bg-orange-200 px-2 py-0.5 text-xs font-medium text-orange-900">
                      Save ₹{comboOffer!.originalPrice - comboOffer!.offerPrice}
                    </span>
                  </div>
                  <a
                    href="https://forms.gle/DoHTWrgqXAM2szLQA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="mt-3 w-full bg-orange-500 hover:bg-orange-600">
                      Book Combo Pass
                    </Button>
                  </a>
                </div>
              )}
              {event.registrationFee >= 0 && (
                <div className="flex items-center gap-3 rounded-lg bg-orange-50 p-3">
                  <Banknote className="h-6 w-6 text-orange-600" />
                  <div>
                    <p className="text-xs font-medium text-orange-600">
                      Registration Fee
                    </p>
                    <p className="text-sm text-orange-900">
                      ₹{event.registrationFee || "Free"}
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
                    <p className="text-sm text-orange-900">{event.capacity}</p>
                  </div>
                </div>
              )}
              {event.timeLimit && (
                <div className="flex items-center gap-3 rounded-lg bg-orange-50 p-3">
                  <Clock className="h-6 w-6 text-orange-600" />
                  <div>
                    <p className="text-xs font-medium text-orange-600">
                      Time Limit
                    </p>
                    <p className="text-sm text-orange-900">{event.timeLimit}</p>
                  </div>
                </div>
              )}
              {
                <div className="flex items-center gap-3 rounded-lg bg-orange-50 p-3">
                  <Gift className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="text-xs font-medium text-green-600">
                      Cash Prize
                    </p>
                    <p className="text-sm text-green-700">₹{event.cashPrize}</p>
                  </div>
                </div>
              }
              <div className="col-span-2 flex items-start gap-3 rounded-lg bg-orange-50 p-3 lg:col-span-3">
                <Users className="mt-1 h-6 w-6 shrink-0 text-orange-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-medium text-orange-600">
                    Event Head
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <p className="text-sm font-medium text-orange-900">
                      {event.eventHeadName}
                    </p>
                    <a
                      href={`tel:${event.eventHeadNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-orange-600 hover:text-orange-700"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      {event.eventHeadNumber}
                    </a>
                  </div>
                </div>
              </div>
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
                  <ul className="grid min-h-[150px] gap-3 sm:grid-cols-2">
                    {event.rules.map((rule, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                        <span className="text-sm leading-relaxed text-orange-700">
                          {rule}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </ScrollArea>

        {/* Fixed Footer */}
        <div className="shrink-0 border-t border-orange-100 bg-white p-4">
          <div className="flex gap-3">
            <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                size="lg"
                className="w-full bg-orange-500 text-white hover:bg-orange-600"
              >
                {isProNight ? "Book Pro Night Pass" : "Register Now"}
              </Button>
            </a>
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
