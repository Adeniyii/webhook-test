import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic"

export const POST = async (request: NextRequest) => {
    try {
        // Parse the JSON body of the request
        const body = await request.json();
        
        // Fetch the current webhooks array from the KV store
        let whooks: any[] | null = await kv.get("webhooks");

        console.log({whooks})
        
        // If the webhooks array doesn't exist, initialize it
        if (!whooks) {
            whooks = [];
        }
        
        // Append the new webhook to the array
        whooks.push(body);
        
        // Save the updated array back to the KV store
        await kv.set("webhooks", whooks);
        
        return NextResponse.json("success", { status: 200 });
    } catch (error) {
        // Handle errors appropriately
        console.error("Error appending webhook:", error);
        return NextResponse.json("Internal Server Error", { status: 500 });
    }
};
