export async function* tokenize(text: string) {
  let currentIndex = 0;
  const encoder = new TextEncoder();

  while (currentIndex < text.length) {
    // Determine the length of the next chunk (1 to 3 characters)
    const chunkLength = Math.min(
      1 + Math.floor(Math.random() * 3),
      text.length - currentIndex
    );

    // Extract the chunk and add it to the tokens array
    const chunk = text.substring(currentIndex, currentIndex + chunkLength);
    yield encoder.encode(chunk);

    await sleep(10);

    // Move to the next chunk
    currentIndex += chunkLength;
  }
}

export function iteratorToStream(iterator: any) {
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
