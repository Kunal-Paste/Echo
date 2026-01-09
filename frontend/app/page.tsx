"use client";

import Link from "next/link";


export default function Home() {
  return (
      <main style={{ padding: "40px" }}>
      <h1>Echo Zone 🎧</h1>
      <p>Welcome to my Next.js app</p>

      <Link href='/register'>
        <button className="bg-white text-black p-1.5 rounded-md font-bold">Register</button>
      </Link>
    </main>
  );
}
