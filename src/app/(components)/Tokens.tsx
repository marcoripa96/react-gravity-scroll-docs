import { Suspense } from "react";

type Props = {
  /**
   * A ReadableStream produced by the AI SDK.
   */
  tokens: string[];
};

/**
 * A React Server Component that recursively renders a stream of tokens.
 * Can only be used inside of server components.
 */
export async function Tokens(props: Props) {
  const { tokens } = props;

  return (
    <Suspense>
      <RecursiveTokens tokens={tokens} />
    </Suspense>
  );
}

type InternalProps = {
  tokens: string[];
};

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function RecursiveTokens({ tokens }: InternalProps) {
  await wait(30);

  const value = tokens.shift();

  if (!value) {
    return null;
  }

  console.log(value);

  return (
    <>
      {value}
      <Suspense fallback={null}>
        <RecursiveTokens tokens={tokens} />
      </Suspense>
    </>
  );
}
