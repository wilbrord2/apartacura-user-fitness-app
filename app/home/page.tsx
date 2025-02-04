"use client";
import React, { useEffect, useState } from "react";
import StepCount from "../components/userSteps";
import Leaderboard from "../components/leaderBoard";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Tabs = ["User Steps", "Leaderboard"];

function HomePage() {
  const [activeTab, setActivetab] = useState("User Steps");
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
    router.push("/");
  };
  return (
    <div className="w-full h-screen flex justify-center py-8">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold p-2 text-slate-500">Welcome to Apertacura App </h1>

        {/* user info */}
        <div className="flex gap-6">
          <span>
            <p className="tex-sm">Welcome, {session?.user?.name}!</p>
            <p className="text-xs">Email: {session?.user?.email}</p>
          </span>
          <button
            onClick={handleSignOut}
            className="border px-3 py-2 rounded font-bold hover:text-white hover:bg-blue-500 hover:duration-500 text-sm"
          >
            Sign Out
          </button>
        </div>

        {/* tabs to navigate btn user steps and leaderboard */}
        <div className="w-fit flex border rounded-lg overflow-hidden my-8">
          {Tabs.map((tab, idx) => (
            <span
              key={idx}
              onClick={() => setActivetab(tab)}
              className={`${
                activeTab === tab ? " bg-blue-500 text-white" : "bg-white"
              } text-sm font-bold py-3 px-4 hover:bg-blue-500 hover:duration-500 transition hover:text-white cursor-pointer`}
            >
              {tab}
            </span>
          ))}
        </div>
        {activeTab === "User Steps" && (
          <StepCount name={session?.user?.name} />
        )}
        {activeTab === "Leaderboard" && <Leaderboard />}
      </div>
    </div>
  );
}

export default HomePage;
