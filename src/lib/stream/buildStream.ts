export async function* tokenize(text: string, batchSize = 10) {
  let currentIndex = 0;

  while (currentIndex < text.length) {
    let batch = "";

    for (let i = 0; i < batchSize && currentIndex < text.length; i++) {
      const chunkLength = Math.min(
        1 + Math.floor(Math.random() * 3),
        text.length - currentIndex
      );
      const chunk = text.substring(currentIndex, currentIndex + chunkLength);
      batch += chunk;
      currentIndex += chunkLength;
      await sleep(10);
    }

    yield batch;
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
