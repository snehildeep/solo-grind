// src/app/page.tsx
"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold mb-6">Solo Grind</h1>
      <button
        className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        onClick={() => router.push("/health")}
      >
        Enter Health Mode 🧘
      </button>
      <button
        className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600"
        onClick={() => router.push("/wealth")}
      >
        Enter Wealth Mode 💰
      </button>
    </main>
  );
}
