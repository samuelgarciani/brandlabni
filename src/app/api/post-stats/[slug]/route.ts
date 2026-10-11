import { NextRequest, NextResponse } from "next/server";
import { getCount, getList } from "@/lib/store";

export const dynamic = "force-dynamic";

export async function GET(_request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [likes, comments] = await Promise.all([
    getCount(`likes:${slug}`),
    getList(`comments:${slug}`),
  ]);
  return NextResponse.json({ likes, comments: comments.length });
}
