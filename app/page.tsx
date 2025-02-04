'use client'
import { SessionProvider } from "next-auth/react";
import Signup from "./components/signup";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <SessionProvider>
        <Signup />
      </SessionProvider>
    </div>
  );
}
