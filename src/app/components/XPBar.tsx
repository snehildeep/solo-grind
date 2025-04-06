"use client";
import { getLevelData } from "../utils/level";


export default function XPBar({ xp }: { xp: number }) {
  const { level, currentXP, nextLevelXP, xpForLevel } = getLevelData(xp);
  const progress = ((currentXP - xpForLevel) / (nextLevelXP - xpForLevel)) * 100;

  return (
    <div className="w-full max-w-xl mx-auto p-4 bg-gray-800 rounded-2xl shadow-lg text-white">
      <div className="flex justify-between items-center mb-2">
        <span>Level {level}</span>
        <span>
          {currentXP} / {nextLevelXP} XP
        </span>
      </div>
      <div className="w-full h-5 bg-gray-600 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-black-500 to-purple-900 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
