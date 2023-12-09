import { iteratorToStream, tokenize } from "@/lib/stream/buildStream";
import fs from "fs/promises";
import path from "path";

export const config = {
  runtime: "edge",
};

export async function GET() {
  const file = await fs.readFile(
    path.resolve(process.cwd(), "public", "text.txt"),
    {
      encoding: "utf-8",
    }
  );
  const iterator = tokenize(file);
  const stream = iteratorToStream(iterator);

  return new Response(stream);
}
