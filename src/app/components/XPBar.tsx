"use client";
import { getLevelData } from "../utils/level";


export default function XPBar({ xp }: { xp: number }) {
  const { level, currentXP, requiredXP } = getLevelData(xp);
  const percentage = (currentXP / requiredXP) * 100;

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-2 text-center">Level {level}</h2>
      <div className="w-full bg-gray-300 h-6 rounded-full overflow-hidden">
        <div
          className="bg-blue-600 h-6 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-center mt-2">
        {currentXP} XP / {requiredXP} XP to next level
      </p>
    </div>
  );
}