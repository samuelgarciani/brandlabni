import { NextRequest, NextResponse } from "next/server";
import { getList, pushToList } from "@/lib/store";

export const dynamic = "force-dynamic";

export type Comment = {
  name: string;
  message: string;
  ts: number;
};

export async function GET(_request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comments = await getList<Comment>(`comments:${slug}`);
  return NextResponse.json({ comments });
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const body = await request.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim().slice(0, 60) : "";
  const message = typeof body?.message === "string" ? body.message.trim().slice(0, 600) : "";

  if (!name || !message) {
    return NextResponse.json({ error: "Nombre y comentario son obligatorios." }, { status: 400 });
  }

  const comment: Comment = { name, message, ts: Date.now() };
  await pushToList(`comments:${slug}`, comment);
  const comments = await getList<Comment>(`comments:${slug}`);
  return NextResponse.json({ comments });
}
