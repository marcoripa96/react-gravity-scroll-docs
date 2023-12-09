import { iteratorToStream, tokenize } from "@/lib/stream/buildStream";

export const runtime = "edge";

const endpoint =
  process.env.NODE_ENV === "production"
    ? `https://react-gravity-scroll-docs.vercel.app`
    : `http://localhost:3000`;

export async function GET() {
  const res = await fetch(`${endpoint}/text.txt`);

  if (!res.ok) {
    return new Response(res.statusText, { status: res.status });
  }

  const iterator = tokenize(await res.text());
  const stream = iteratorToStream(iterator);

  return new Response(stream);
}
