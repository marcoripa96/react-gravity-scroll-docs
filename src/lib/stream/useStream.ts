"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { StreamedResponse, StreamedResponseItem } from "./types";
import { tokenize } from "./buildStream";

export function useStream() {
  const [completion, setCompletion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>();
  const [abortController, setAbortController] =
    useState<AbortController | null>(null);

  const pending = useRef(false);

  const refetch = useCallback(async () => {
    if (pending.current) {
      return;
    }

    try {
      pending.current = true;
      setLoading(true);
      setError(undefined);

      const abortController = new AbortController();
      setAbortController(abortController);

      // Empty the completion immediately.
      setCompletion("");

      const res = await fetch("/api/stream", {
        method: "GET",
        signal: abortController.signal,
      }).catch((err) => {
        throw err;
      });

      if (!res.ok) {
        throw new Error(
          (await res.text()) || "Failed to fetch the chat response."
        );
      }

      if (!res.body) {
        throw new Error("The response body is empty.");
      }

      let result: string = "";

      // const txt = (await res.json()).text as string;
      // const iterator = tokenize(txt, 1);

      // let result: string[] = [];

      // for await (const tokens of iterator) {
      //   result.push(tokens);
      //   setCompletion(result.join(""));

      //   if (abortController === null) {
      //     break;
      //   }
      // }

      const reader = res.body.getReader();

      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }

        // Update the completion state with the new message tokens.
        result += decoder.decode(value);
        setCompletion(result);

        // The request has been aborted, stop reading the stream.
        if (abortController === null) {
          reader.cancel();
          break;
        }
      }

      setAbortController(null);
      return result;
    } catch (err) {
      // Ignore abort errors as they are expected.
      if ((err as any).name === "AbortError") {
        setAbortController(null);
        return null;
      }

      setError(err as Error);
    } finally {
      setLoading(false);
      pending.current = false;
    }
  }, []);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { completion, loading, error, refetch };
}
