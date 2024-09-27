import { NextRequest, NextResponse } from "next/server";
import { comments } from "./data";

export async function GET() {
  return NextResponse.json({ comments }); //new Response("get api code")
}

export async function POST(request: NextRequest) {
  const body: { text: string } = await request.json();
  const createPayload = {
    id: comments.length + 1,
    text: body.text,
  };
  comments.push(createPayload);

  return new Response(JSON.stringify(createPayload), { status: 201 }); //NextResponse.json({createPayload})
}
