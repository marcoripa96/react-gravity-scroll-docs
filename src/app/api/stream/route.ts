import fs from "fs";

export async function* tokenize(text: string) {
  let currentIndex = 0;

  while (currentIndex < text.length) {
    // Determine the length of the next chunk (1 to 3 characters)
    const chunkLength = Math.min(
      1 + Math.floor(Math.random() * 3),
      text.length - currentIndex
    );

    // Extract the chunk and add it to the tokens array
    const chunk = text.substring(currentIndex, currentIndex + chunkLength);
    yield chunk;

    await sleep(10);

    // Move to the next chunk
    currentIndex += chunkLength;
  }
}

function iteratorToStream(iterator: any) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next();

      if (done) {
        controller.close();
      } else {
        controller.enqueue(value);
      }
    },
  });
}

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export function GET() {
  const file = fs.readFileSync("./src/app/(components)/text.md", {
    encoding: "utf-8",
  });
  const iterator = tokenize(file);
  const stream = iteratorToStream(iterator);

  return new Response(stream);
}
