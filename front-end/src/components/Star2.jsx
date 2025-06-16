import { Star } from "lucide-react";

const ratings = [
  { stars: 5, percent: 70 },
  { stars: 4, percent: 10 },
  { stars: 3, percent: 8 },
  { stars: 2, percent: 12 },
  { stars: 1, percent: 9 },
];

export default function RatingBreakdown() {
  return (
    <div className="space-y-3 w-full max-w-xs">
      {ratings.map(({ stars, percent }) => (
        <div key={stars} className="flex items-center gap-2">
          <div className="flex items-center text-yellow-400 ">
            <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
            <span className="text-sm ml-1">{stars}</span>
          </div>

          <div className="flex-1 bg-gray-200 h-2 rounded relative w-40">
            <div
              className="absolute top-0 left-0 h-2 bg-yellow-400 rounded"
              style={{ width: `${percent}%` }}
            />
          </div>

          <span className="text-sm text-gray-800 w-10 text-right">{percent}%</span>
        </div>
      ))}
    </div>
  );
}
