import fs from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  const file = await fs.readFile(
    path.resolve(process.cwd(), "public", "text.txt"),
    {
      encoding: "utf-8",
    }
  );

  return NextResponse.json({
    text: file,
  });
}
