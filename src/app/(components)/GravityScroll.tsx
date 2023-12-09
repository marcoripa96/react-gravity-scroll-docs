"use client";

import { cn } from "@/lib/utils";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { GravityScrollAreaProps, useGravityScroll } from "react-gravity-scroll";

export function GravityScroll({
  children,
  scrollThreshold,
  autoScrollEnabled,
  className,
}: GravityScrollAreaProps) {
  const { scrollAreaProps, viewportProps } = useGravityScroll({
    autoScrollEnabled,
    scrollThreshold,
  });

  return (
    <ScrollArea.Root className={cn("p-2", className)}>
      {/* The viewport is the element with overflow: scroll */}
      <ScrollArea.Viewport
        {...scrollAreaProps}
        className={cn("p-2", scrollAreaProps.className)}
      >
        {/* Here we add the gravity viewport that contains the content of the ScrollArea */}
        <div {...viewportProps}>{children}</div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="horizontal">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar orientation="vertical" className="w-2 bg-black/10">
        <ScrollArea.Thumb className="bg-black/30 rounded-lg" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  );
}
