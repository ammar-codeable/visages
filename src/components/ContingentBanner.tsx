import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CheckCircle, IndianRupee, Info, Sparkles, Users } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

const features = [
  { icon: Users, text: "One Team Per Event" },
  { icon: CheckCircle, text: "Eligible for All Events" },
  { icon: IndianRupee, text: "Best Value Package" },
] as const;

const PackageTitle = () => (
  <div className="flex items-center gap-2">
    <Sparkles className="h-6 w-6 text-orange-500" />
    <h2 className="text-2xl font-bold text-orange-950">
      Premium Contingent Package
    </h2>
  </div>
);

const PriceDisplay = () => (
  <div className="flex flex-col items-end">
    <div className="text-sm font-medium text-orange-600">Package Price</div>
    <div className="text-4xl font-bold text-orange-950">₹15,000</div>
    <div className="text-sm font-medium text-orange-600">per university</div>
  </div>
);

const FeatureList = () => (
  <div className="hidden gap-6 sm:flex sm:flex-wrap">
    {features.map(({ icon: Icon, text }) => (
      <div key={text} className="flex items-center gap-2 text-orange-600">
        <Icon className="h-5 w-5" />
        <span className="text-sm font-medium">{text}</span>
      </div>
    ))}
  </div>
);

const ContingentInfo = () => (
  <TooltipProvider delayDuration={100}>
    <Tooltip>
      <TooltipTrigger>
        <Info className="h-4 w-4 text-orange-500 hover:text-orange-600" />
      </TooltipTrigger>
      <TooltipContent 
        className="max-w-[250px] bg-gradient-to-r from-orange-50/95 via-orange-100/95 to-orange-50/95 text-orange-950 border-orange-200"
        sideOffset={4}
      >
        <p>Additional teams from the same university require separate registration or another contingent package.</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

type ContingentBannerProps = {
  variant: "mobile" | "desktop";
};

const ContingentBanner = ({ variant }: ContingentBannerProps) => {
  const { scrollY } = useScroll();

  // Only apply transforms for desktop variant
  const height =
    variant === "desktop"
      ? useTransform(scrollY, [0, 200], ["200px", "80px"])
      : "auto";
  const expandedOpacity =
    variant === "desktop" ? useTransform(scrollY, [0, 100], [1, 0]) : 1;
  const collapsedOpacity =
    variant === "desktop" ? useTransform(scrollY, [0, 200], [0, 1]) : 0;

  if (variant === "mobile") {
    return (
      <div className="rounded-xl border-2 border-orange-200 bg-gradient-to-r from-orange-50/95 via-white/95 to-orange-50/95 p-4 shadow-xl backdrop-blur-md">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-orange-500" />
              <h2 className="font-bold text-orange-950">
                Premium Contingent Package
              </h2>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-orange-600">Price</div>
              <div className="text-xl font-bold text-orange-950">₹15,000</div>
            </div>
          </div>
          <Button
            size="lg"
            className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600"
          >
            Register Contingent
          </Button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      style={{ height }}
      className="relative overflow-hidden rounded-xl border-2 border-orange-200 bg-gradient-to-r from-orange-50/95 via-white/95 to-orange-50/95 shadow-xl backdrop-blur-md"
    >
      {/* Collapsed Header */}
      <motion.div
        style={{ opacity: collapsedOpacity }}
        className="flex h-20 items-center justify-between p-4"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-orange-500" />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-orange-950">
                Premium Contingent Package
              </h2>
              <ContingentInfo />
            </div>
            <p className="text-sm text-orange-700">
              One team per event • ₹15,000
            </p>
          </div>
        </div>
      </motion.div>

      {/* Expanded Content */}
      <motion.div
        style={{ opacity: expandedOpacity }}
        className="absolute inset-0 p-6"
      >
        <div className="flex h-full">
          <div className="flex h-full flex-1 flex-col justify-between pr-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <PackageTitle />
                <ContingentInfo />
              </div>
              <p className="hidden text-lg text-orange-700 sm:block">
                Send one team per event from your university!
              </p>
            </div>
            <FeatureList />
          </div>
          <PriceDisplay />
        </div>
      </motion.div>

      {/* Register Button - Full width on mobile */}
      <div className="absolute bottom-3 left-4 right-4 sm:left-auto">
        <Button
          size="lg"
          className="w-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 text-white hover:from-orange-600 hover:to-amber-600 sm:w-auto"
        >
          Register Contingent
        </Button>
      </div>
    </motion.div>
  );
};

export default ContingentBanner;
