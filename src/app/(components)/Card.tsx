import { cn } from "@/lib/utils";
import { HTMLAttributes, PropsWithChildren } from "react";

export function Card({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative h-96 bg-white/30  border border-black/5 shadow-2xl after:bg-main-gradient after:absolute after:opacity-25 after:-z-[7] after:-inset-28 after:blur-[100px] rounded-lg after:max-w-[100vw]",
        className
      )}
      {...props}
    >
      {children}
      <div className="absolute -inset-2 -z-10 blur-lg" />
    </div>
  );
}
