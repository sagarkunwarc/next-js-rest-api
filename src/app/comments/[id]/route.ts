import { NextRequest, NextResponse } from "next/server";
import { comments } from "../data";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const comment = comments.find((c) => c.id === Number(context.params.id));

  return NextResponse.json(comment);
}

export async function PATCH(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const body: { text: string } = await request.json();
  const index = comments.findIndex((a) => a.id === Number(context.params.id));

  comments[index].text = body.text;
  return NextResponse.json(comments[index]);
}

export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const index = comments.findIndex((a) => a.id === Number(context.params.id));
  const deleteComment = comments[index];
  comments.splice(index, 1);
  return NextResponse.json(deleteComment);
}
