import { iteratorToStream, tokenize } from "@/lib/stream/buildStream";
import fs from "fs";

export function GET() {
  const file = fs.readFileSync(process.cwd() + "/public/text.txt", {
    encoding: "utf-8",
  });
  const iterator = tokenize(file);
  const stream = iteratorToStream(iterator);

  return new Response(stream);
}
