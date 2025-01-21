import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"

export default function CountdownTimer() {
  // Set the target date to February 14, 2025
  const targetDate = new Date("2025-02-14T00:00:00");

  // State to hold the remaining time
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  // Update the remaining time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [targetDate]);

  // Function to calculate the remaining time
  function getTimeLeft(targetDate: Date) {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { hours, minutes, seconds };
  }

  return (
    <Card className="flex flex-col items-center justify-center p-10 space-y-4">
      <CardHeader className="flex flex-col items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-xl font-semibold">Countdown to February 14</CardTitle>
      </CardHeader>
      <CardContent className="text-6xl font-bold">
        {String(timeLeft.hours).padStart(2, "0")}:
        {String(timeLeft.minutes).padStart(2, "0")}:
        {String(timeLeft.seconds).padStart(2, "0")}
      </CardContent>
    </Card>
  );
}
