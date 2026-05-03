import { authAPI } from "@/lib/simple-auth";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { action, email, password, name, image } = await request.json();

    if (action === "sign-up") {
      const result = await authAPI.signUp(email, password, name, image);
      if (result.error) {
        return NextResponse.json({ error: result.error }, { status: 400 });
      }
      return NextResponse.json({ data: result.data });
    }

    if (action === "sign-in") {
      const result = await authAPI.signIn(email, password);
      if (result.error) {
        return NextResponse.json({ error: result.error }, { status: 400 });
      }
      return NextResponse.json({ data: result.data });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const email = request.nextUrl.searchParams.get("email");
    if (!email) {
      return NextResponse.json({ data: null });
    }

    const result = authAPI.getSession(email);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ data: null });
  }
}
