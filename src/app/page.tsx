import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-6 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('bg1solo.jpeg')" }}>
      <Link href="/health">
        <button className="bg-blue-200 text-black text-xl px-20 py-3 rounded-2xl  hover:text-white hover:bg-black transition">
          Health Mode 
        </button>
      </Link>
      <Link href="/wealth">
        <button className="bg-blue-200 text-black text-xl px-20 py-3 rounded-2xl hover:text-white hover:bg-black transition">
          Wealth Mode 
        </button>
      </Link>
      
    </main>
  );
}
