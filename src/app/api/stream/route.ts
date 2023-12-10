import { iteratorToStream, tokenize } from "@/lib/stream/buildStream";
// import path from "path";

export const runtime = "edge";

export async function GET() {
  const endpoint =
    process.env.NODE_ENV === "production"
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

  const result = await fetch(`${endpoint}/text.txt`);

  const text = await result.text();

  const tokens = tokenize(text);
  const stream = iteratorToStream(tokens);

  return new Response(stream);
}
