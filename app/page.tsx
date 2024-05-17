import { kv } from "@vercel/kv";

export default async function Home() {
  const webhooks = await kv.get<any[]>("webhooks");
  
  console.log({webhooks})
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>List of received webhook triggers</p>
    <div>
      {webhooks?.map((wh) => (
        <div key={wh.id}>
          <pre>
            {JSON.stringify(wh)}
          </pre>
        </div>
      ))}
    </div>
    </main>
  );
}
