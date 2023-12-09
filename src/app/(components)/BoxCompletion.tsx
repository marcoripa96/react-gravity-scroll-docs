"use client";

import { useStream } from "@/lib/stream/useStream";
import { GravityScroll } from "./GravityScroll";
import Markdown from "react-markdown";
import { Card } from "./Card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCw } from "lucide-react";

const thresholds = ["20%", "40%", "100%"];
const autoScrollMode = ["auto", false, true];

export function BoxCompletion() {
  const { completion, loading, refetch } = useStream();
  const [autoScroll, setAutoScroll] = useState(0);
  const [scrollThreshold, setScrollThreshold] = useState(0);

  const autoScrollEnabled =
    autoScrollMode[autoScroll] === "auto"
      ? loading
      : autoScrollMode[autoScroll];

  const toggleAutoScroll = () => {
    setAutoScroll((prev) => (prev + 1) % autoScrollMode.length);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-start gap-2 md:flex-row md:justify-between">
        <button
          className="bg-black/5 hover:bg-black/5 leading-tight rounded-full px-3 py-2 flex items-center gap-2 text-base h-9"
          onClick={toggleAutoScroll}
        >
          autoScrollEnabled: {autoScrollMode[autoScroll].toString()}
          <span
            className={cn(
              "w-3 h-3 rounded-full items-center transition-colors",
              {
                "bg-green-400/40": autoScrollEnabled,
                "bg-red-400/40": !autoScrollEnabled,
              }
            )}
          />
        </button>
        <div className="flex flex-row bg-black/5 rounded-full px-3 py-1 gap-2 h-9">
          scrollThreshold:
          {thresholds.map((threshold, index) => (
            <div
              key={index}
              className="md:w-20 w-16 relative h-full items-center"
            >
              <button
                onClick={() => setScrollThreshold(index)}
                className="w-full h-full"
              >
                {threshold}
              </button>
              {scrollThreshold === index && (
                <motion.div
                  layoutId="btn-scroll-threshold"
                  className="absolute inset-0 bg-red-100 -z-10 rounded-lg"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <Card>
        <GravityScroll
          className="w-full h-full z-20"
          scrollThreshold={thresholds[scrollThreshold]}
          autoScrollEnabled={autoScrollMode[autoScroll] as boolean}
        >
          <Markdown className="w-full whitespace-pre-line prose prose-hr:m-0 prose-headings:m-0 prose-p:mt-0 prose-p:m-0 prose-headings:font-medium">
            {completion}
          </Markdown>
        </GravityScroll>
      </Card>
      <div className="flex items-center justify-center group">
        <button
          onClick={refetch}
          disabled={loading}
          className="bg-black/5 hover:bg-black/5 leading-tight rounded-full px-3 py-2 flex items-center gap-2 text-base h-9 disabled:opacity-50 hover:scale-105 transition-transform focus:scale-105 disabled:pointer-events-none"
        >
          <span>Retry</span> <RotateCw className="w-4 h-4 text-black/20" />
        </button>
      </div>
    </div>
  );
}
