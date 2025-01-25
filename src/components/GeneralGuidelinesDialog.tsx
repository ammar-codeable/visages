import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "motion/react";
import { ScrollText } from "lucide-react";
import { useState } from "react";

const generalGuidelines = [
  "The contingent fee for participation is Rs. 15000/ including all events",
  "All paricipants must carry a valid ID card of their respective college/university",
  "Participants must register under non-contingent must pay the registration fee for the respective event",
  "All performing participants must carry a backup of their audio tracks",
  "Timings for each event will be informed by the event heads in their respective whatsapp groups",
  "Any form of vulgarity, misbehaviour, or mention sex, religion, politics, profanity, or humiliation directed at a specific community of college will not be tolerated and will result in immediate disqualification.",
  "There is a zero tolerance policy towards to possession, distribution, or consumption of any unauthorized substances. Sharp objects , inflammable substances, lasers or any other harmful objects is not allowed in the campus.",
];

interface GeneralGuidelinesDialogProps {
  open: boolean;
  onClose: () => void;
}

export const GeneralGuidelinesDialog = ({
  open,
  onClose,
}: GeneralGuidelinesDialogProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = (e: any) => {
    const container = e.currentTarget;
    const progress =
      (container.scrollTop /
        (container.scrollHeight - container.clientHeight)) *
      100;
    setScrollProgress(progress);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="via-white/98 max-h-[85vh] max-w-2xl overflow-hidden border-orange-200 bg-gradient-to-br from-orange-50/95 to-orange-50/95 p-0 shadow-xl">
        <DialogHeader className="relative bg-gradient-to-r from-orange-500 to-orange-600 p-6 shadow-lg">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
          <div className="relative flex items-center gap-3">
            <ScrollText className="h-7 w-7 text-white" />
            <DialogTitle className="text-2xl font-bold text-white">
              General Guidelines
            </DialogTitle>
          </div>
        </DialogHeader>

        <ScrollArea className="h-full max-h-[60vh] p-6" onScroll={handleScroll}>
          <motion.ul
            className="grid gap-4 pr-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {generalGuidelines.map((guideline, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-orange-100/50"
              >
                <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-orange-500 transition-transform group-hover:scale-125" />
                <span className="text-pretty leading-relaxed">{guideline}</span>
              </motion.li>
            ))}
          </motion.ul>
        </ScrollArea>

        {/* Scroll Progress Indicator */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-orange-100">
          <motion.div
            className="h-full bg-gradient-to-r from-orange-500 to-orange-600"
            style={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
