import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SparkleIcon from "@/components/SparkleIcon";

const CheerSquadDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="relative flex items-center gap-1 border-2 border-orange-400 px-2 text-sm font-medium text-orange-600 hover:border-orange-500 hover:bg-orange-200/60 sm:gap-2 sm:px-4 sm:text-base"
        >
          <SparkleIcon />
          <span>Cheer Squad</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[min(calc(100vw-2rem),32rem)] p-6">
        <DialogHeader>
          <DialogTitle className="text-xl">Cheer Squad Registration</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="rounded-lg bg-orange-50 p-4">
            <h3 className="mb-2 font-semibold text-orange-950">Support Your University with the Cheer Squad!</h3>
            <p className="text-orange-800">
              Become part of the Cheer Squad and rally behind your University! As a member, you'll have access to all events as a spectator, creating an electric atmosphere and boosting team spirit.
            </p>
            <p className="mt-2 text-sm font-medium text-orange-900">
              Note: Cheer Squad registration provides spectator access only.
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="rounded-lg border border-orange-200 p-4">
              <h4 className="font-semibold text-orange-950">Bulk Cheer Squad Registration</h4>
              <p className="text-orange-700">₹2,000 for 20 members (access to both days)</p>
              <p className="mt-1 text-sm text-orange-600">Great for organizing a large group of supporters!</p>
            </div>
            
            <div className="rounded-lg border border-orange-200 p-4">
              <h4 className="font-semibold text-orange-950">Individual Cheer Squad Registration</h4>
              <p className="text-orange-700">₹150 per day</p>
              <p className="mt-1 text-sm text-orange-600">Perfect for individual supporters who want to join the fun!</p>
            </div>
          </div>

          <Button
            className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:brightness-110"
            asChild
          >
            <a 
              href="https://forms.gle/DoHTWrgqXAM2szLQA" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Join the Cheer Squad!
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CheerSquadDialog;
