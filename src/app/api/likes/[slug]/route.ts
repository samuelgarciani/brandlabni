import { NextRequest, NextResponse } from "next/server";
import { getCount, incrCount } from "@/lib/store";

export const dynamic = "force-dynamic";

export async function GET(_request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const count = await getCount(`likes:${slug}`);
  return NextResponse.json({ count });
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const body = await request.json().catch(() => ({}));
  const delta = body?.action === "unlike" ? -1 : 1;
  const count = await incrCount(`likes:${slug}`, delta);
  return NextResponse.json({ count });
}
