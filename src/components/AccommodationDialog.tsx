import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Bed, Phone } from "lucide-react";

type AccommodationDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const AccommodationDialog = ({
  open,
  onOpenChange,
}: AccommodationDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader className="mb-4">
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Bed className="h-5 w-5 text-orange-600" />
            <span>Accommodation Details</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="rounded-lg border border-orange-200 bg-orange-50 p-4">
            <p className="text-orange-900">
              Accommodation is available for both boys and girls.
            </p>
            <p className="mt-2 font-semibold text-orange-900">
              Rate: ₹600/- per person per day
            </p>
          </div>

          <div className="rounded-lg border border-orange-200 p-4">
            <p className="text-sm text-orange-800">
              For more details, contact:
            </p>
            <div className="mt-2 flex items-center gap-2">
              <span className="font-medium text-orange-900">Manasa</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 gap-1.5 text-orange-600 hover:bg-orange-100 hover:text-orange-700"
                asChild
              >
                <a href="tel:+917994960897">
                  <Phone className="h-4 w-4" />
                  +91 7994960897
                </a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AccommodationDialog;
