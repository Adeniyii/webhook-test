import { kv } from "@vercel/kv";

export const dynamic = "force-dynamic"

export default async function Home() {
  const webhooks = await kv.mget<any[]>("webhooks");
  // const hooks = await fetch("https://webhook-test-khaki.vercel.app/api/hooks").then(v => v.json())

  // console.log(JSON.stringify(webhooks), {hooks: JSON.stringify(hooks)})
  
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p>List of received webhook triggers</p>
    <div className="flex flex-col gap-20">
      {webhooks?.[0].map((wh: any, idx: any) => (
        <div key={wh.id}>
          <p>{idx + 1}</p>
          <p className="mb-4 mt-2">------------------------------------------------------------------</p>
          <pre>
            {JSON.stringify(wh, undefined, 4)}
          </pre>
        </div>
      ))}
    </div>
    </main>
  );
}
