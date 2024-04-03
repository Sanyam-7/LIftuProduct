"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./globals.css";

export default function Home() {
  const router = useRouter();

  const handleRouteChange = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white">
      <h1 className="text-4xl font-bold mb-8">Assessment App</h1>
      <div className="flex space-x-4">
        <button
          className="bg-zinc-900 hover:bg-black text-white font-bold py-2 px-4 rounded"
          onClick={() => handleRouteChange("/admin")}
        >
          Admin
        </button>
        <button
          className="bg-zinc-900 hover:bg-black text-white font-bold py-2 px-4 rounded"
          onClick={() => handleRouteChange("/Student")}
        >
          Student
        </button>
      </div>
    </div>
  );
}
