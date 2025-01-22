import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const targetDate = new Date("2025-02-21T08:00:00");
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
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-3 shadow-lg">
        <span className="text-3xl font-bold text-yellow-300 sm:text-4xl lg:text-5xl">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-2 text-sm font-medium uppercase tracking-wide text-black-400 sm:text-base">
        {label}
      </span>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mt-8 flex w-full flex-wrap justify-center gap-4 sm:gap-6"
    >
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Min" />
      <TimeUnit value={timeLeft.seconds} label="Sec" />
    </motion.div>
  );
}
