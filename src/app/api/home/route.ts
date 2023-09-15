import { NextResponse, NextMiddleware } from "next/server";

export async function GET(req: Request, next: NextMiddleware) {
  const body = req.body;

  return NextResponse.json({ message: body });
}
