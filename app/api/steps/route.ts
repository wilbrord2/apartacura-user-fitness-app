import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    steps: Math.floor(Math.random() * 1000),
  });
}
