import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
    const body = await request.json()
    await kv.json.arrappend("webhooks", body)
    return new NextResponse("success", {status: 200})
}