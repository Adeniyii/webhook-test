"use client"

import { kv } from "@vercel/kv";

export const dynamic = "force-dynamic"

export default async function Home() {
  let webhooks = await kv.get<any>("webhooks");

  webhooks = JSON.parse(webhooks)

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p>List of received webhook triggers</p>
    <div className="flex flex-col gap-20">
      {webhooks?.map((wh: any, idx: any) => {

        // if (Array.isArray(wh)) {
        //   return wh.map((whh, idx) => {
        //     return (
        // <div key={idx}>
        //   <p>{idx + 1}</p>
        //   <p className="mb-4 mt-2">------------------------------------------------------------------</p>
        //   <pre>
        //     {JSON.stringify(whh, undefined, 4)}
        //   </pre>
        // </div>
        //     )
        //   })
        // }
        
        return (
        <div key={idx}>
          <p>{idx + 1}</p>
          <p className="mb-4 mt-2">------------------------------------------------------------------</p>
          <pre>
            {JSON.stringify(wh, undefined, 4)}
          </pre>
        </div>
      )})}
    </div>
    </main>
  );
}
