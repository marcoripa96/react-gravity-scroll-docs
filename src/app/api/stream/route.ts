import { iteratorToStream, tokenize } from "@/lib/stream/buildStream";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  //   const file = await fs.readFile(
  //     path.resolve(process.cwd(), "public", "text.txt"),
  //     {
  //       encoding: "utf-8",
  //     }
  //   );
  const iterator = tokenize(
    "From that day on, Sir Arthur continued to protect the kingdom, but he never forgot the magical adventure that had taught him the true meaning of courage and love for nature. And so, his legend lived on, inspiring generations to come."
  );
  const stream = iteratorToStream(iterator);

  return new Response(stream);
}
