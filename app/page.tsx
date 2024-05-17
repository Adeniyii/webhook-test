import { kv } from "@vercel/kv";

export const dynamic = "force-dynamic"

export default async function Home() {
  const webhooks = await kv.get<any[]>("webhooks");

  console.log({webhooks})
  
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p>List of received webhook triggers</p>
    <div className="flex flex-col gap-6">
      {webhooks?.map((wh, idx) => (
        <div key={wh.id}>
          <p>{idx}</p>
          <pre>
            {JSON.stringify(wh, undefined, 4)}
          </pre>
          <p className="mt-4">------------------------------------------------------------------</p>
        </div>
      ))}
    </div>
    </main>
  );
}
