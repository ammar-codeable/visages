import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Info, Trophy } from "lucide-react";

const PointsDialog = () => {
  const pointsByRating = [
    { 
      stars: 5, 
      positions: [
        { position: 1, points: 1000 },
        { position: 2, points: 800 },
        { position: 3, points: 600 },
      ]
    },
    { 
      stars: 4, 
      positions: [
        { position: 1, points: 800 },
        { position: 2, points: 600 },
        { position: 3, points: 400 },
      ]
    },
    { 
      stars: 3, 
      positions: [
        { position: 1, points: 600 },
        { position: 2, points: 400 },
        { position: 3, points: 200 },
      ]
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="border-orange-200 bg-white/50 text-orange-900 hover:bg-orange-100/80 hover:text-orange-950"
        >
          View Points Table
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Points Distribution</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="rounded-lg bg-orange-50 p-4">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-orange-500" />
              <p className="text-sm text-orange-800">
                Only contingent registrations are eligible for overall prize points. Open events do not count towards overall points.
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-orange-200">
            <table className="w-full">
              <thead className="bg-orange-100/50">
                <tr>
                  <th className="p-3 text-center text-orange-950">Stars</th>
                  <th className="p-3 text-center text-orange-950">1st Place</th>
                  <th className="p-3 text-center text-orange-950">2nd Place</th>
                  <th className="p-3 text-center text-orange-950">3rd Place</th>
                </tr>
              </thead>
              <tbody>
                {pointsByRating.map(({ stars, positions }) => (
                  <tr
                    key={stars}
                    className="border-t border-orange-100 hover:bg-orange-50/50 transition-colors"
                  >
                    <td className="p-3 text-center text-orange-950">
                      <div className="flex justify-center">
                        {"⭐".repeat(stars)}
                      </div>
                    </td>
                    {positions.map(({ points }, idx) => (
                      <td key={idx} className="p-3 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <Trophy className={`h-4 w-4 ${
                            idx === 0 ? 'text-yellow-500' : 
                            idx === 1 ? 'text-gray-400' : 
                            'text-amber-700'
                          }`} />
                          <span className="font-medium text-orange-950">{points}</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PointsDialog;
