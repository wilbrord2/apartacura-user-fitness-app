import { NextResponse } from "next/server";

export async function GET() {
  const users = [
    { name: "Alice", steps: 12000, rank: 1 },
    { name: "Frank", steps: 4000, rank: null },
    { name: "Grace", steps: 3500, rank: 1 },
    { name: "Bob", steps: 9500, rank: 2 },
    { name: "Charlie", steps: 8500, rank: 3 },
    { name: "Jack", steps: 2000, rank: 4 },
    { name: "David", steps: 7000, rank: null },
    { name: "Emma", steps: 5000, rank: 1 },
    { name: "Henry", steps: 3000, rank: null },
    { name: "Ivy", steps: 2500, rank: 2 },
  ];


  return NextResponse.json(users);
}
