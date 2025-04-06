"use client";
import XPBar from "../components/XPBar";
import { useState } from "react";

export default function HealthPage() {

  const [xp, setXP] = useState(0);  
  const handleCompleteTask = (amount: number) => {
    setXP(prev => prev + amount);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Health Mode 🧠</h1>
      <XPBar xp={xp} />
      <div className="mt-6 grid gap-4">
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-xl"
          onClick={() => handleCompleteTask(50)}
        >
          ✅ Complete &quot;Study 1 hour&quot; (+50 XP)
        </button>

        <button
          className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-xl"
          onClick={() => handleCompleteTask(100)}
        >
          💪 Workout 30 mins (+100 XP)
        </button>

        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-xl"
          onClick={() => handleCompleteTask(30)}
        >
          📚 Read 10 pages (+30 XP)
        </button>
      </div>
    </main>
  );
}
