import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic"

export const GET = async () => {
    try {
        const webhooks = await kv.mget<any[]>("webhooks");
        
        return NextResponse.json(webhooks, { status: 200 });
    } catch (error) {
        // Handle errors appropriately
        console.error("Error appending webhook:", error);
        return NextResponse.json("Internal Server Error", { status: 500 });
    }
};