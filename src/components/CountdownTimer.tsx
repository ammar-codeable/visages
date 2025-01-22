import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const targetDate = new Date("2025-02-14T12:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [targetDate]);

  function getTimeLeft(targetDate: Date) {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      initial={{ y: 20, opacity: 1 }}
      className="flex flex-col items-center"
    >
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
        <div className="px-3 py-2">
          <span className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            {String(value).padStart(2, "0")}
          </span>
        </div>
      </div>
      <span className="mt-2 text-xs font-medium uppercase tracking-wider text-white/70 sm:text-sm">
        {label}
      </span>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9 }}
      className="mt-8 w-full"
    >
      <div className="flex justify-center gap-3 sm:gap-4 md:gap-6">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Min" />
        <TimeUnit value={timeLeft.seconds} label="Sec" />
      </div>
    </motion.div>
  );
}
