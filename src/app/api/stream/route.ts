import { iteratorToStream, tokenize } from "@/lib/stream/buildStream";
import fs from "fs/promises";
import { NextResponse } from "next/server";
// import path from "path";

export const runtime = "edge";

export async function GET() {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  const text = await result.text();
  // const file = await fs.readFile(
  //   path.resolve(process.cwd(), "public", "text.txt"),
  //   {
  //     encoding: "utf-8",
  //   }
  // );

  const tokens = tokenize(text, 1);

  const stream = iteratorToStream(tokens);

  // return NextResponse.json({
  //   text: file,
  // });
  return new Response(stream);
}
