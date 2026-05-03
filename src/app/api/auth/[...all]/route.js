// This route has been replaced by the simpler /api/auth/simple endpoint
// Keeping this file empty to avoid conflicts

import { NextResponse } from "next/server";

export async function POST(request) {
  return NextResponse.json({ error: "Use /api/auth/simple instead" }, { status: 400 });
}

export async function GET(request) {
  return NextResponse.json({ error: "Use /api/auth/simple instead" }, { status: 400 });
}
