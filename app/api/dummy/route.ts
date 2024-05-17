import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
    const body = await request.json()
    const whooks = await kv.get("webhooks")
    if (!whooks) {
        await kv.set("webhooks", [])
    }
    await kv.json.arrappend("webhooks", body)
    return new NextResponse("success", {status: 200})
}