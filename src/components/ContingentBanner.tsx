import { Button } from "@/components/ui/button";
import { CheckCircle, IndianRupee, Sparkles, Users } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

const features = [
  { icon: Users, text: "Unlimited Participants" },
  { icon: CheckCircle, text: "Access to All Events" },
  { icon: IndianRupee, text: "Best Value for Money" },
] as const;

const PackageTitle = () => (
  <div className="flex items-center gap-2">
    <Sparkles className="h-6 w-6 text-orange-500" />
    <h2 className="text-2xl font-bold text-orange-950">Premium Contingent Package</h2>
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
  <div className="sm:flex-wrap gap-6 hidden sm:flex">
    {features.map(({ icon: Icon, text }) => (
      <div key={text} className="flex items-center gap-2 text-orange-600">
        <Icon className="h-5 w-5" />
        <span className="text-sm font-medium">{text}</span>
      </div>
    ))}
  </div>
);

const ContingentBanner = () => {
  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [0, 200], ["200px", "80px"]);
  const expandedOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  const collapsedOpacity = useTransform(scrollY, [0, 200], [0, 1]);

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
            <h2 className="font-bold text-orange-950">Premium Contingent Package</h2>
            <p className="text-sm text-orange-700">₹15,000 for unlimited participation</p>
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
              <PackageTitle />
              <p className="text-lg text-orange-700 hidden sm:block">
                Register your entire university contingent and unlock unlimited participation!
              </p>
            </div>
            <FeatureList />
          </div>
          <PriceDisplay />
        </div>
      </motion.div>

      {/* Register Button - Full width on mobile */}
      <div className="absolute bottom-3 right-4 left-4 sm:left-auto">
        <Button
          size="lg"
          className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 px-8 text-white hover:from-orange-600 hover:to-amber-600"
        >
          Register Contingent
        </Button>
      </div>
    </motion.div>
  );
};

export default ContingentBanner;
