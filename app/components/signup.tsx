"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Signup() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/home");
    }
  }, [status, router]);

  return (
    <div className="text-center border rounded-lg p-8">
      <h2 className="text-2xl font-semibold">Signup to Apertacura</h2>
      <button
        onClick={() => signIn("google")}
        className="font-bold border p-3 mt-5 rounded-lg bg-blue-500 text-white hover:bg-blue-700 transition flex items-center gap-2"
      >
        <div className="rounded-full w-8 h-8 overflow-hidden">
          <Image
            src="/google.jpg"
            alt="Signup with Google"
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
        Sign in with Google
      </button>
    </div>
  );
}
