"use client";

import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import { HTMLAttributes } from "react";
import { toast } from "sonner";

type ButtonLinkProps = HTMLAttributes<HTMLAnchorElement>;

export function ButtonCopy({ className, ...props }: ButtonLinkProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("npm install react-gravity-scroll");
    toast.info("Copied to clipboard");
  };

  return (
    <motion.button
      className="bg-black/5 hover:bg-black/5 leading-tight rounded-full px-3 py-2 flex items-center gap-2 text-xs"
      whileHover={{
        scale: 1.01,
      }}
      whileTap={{ scale: 0.99 }}
      onClick={copyToClipboard}
    >
      <code>npm install react-gravity-scroll</code>

      <span className="text-xs">
        <Copy className="w-3 h-3" />
      </span>
    </motion.button>
  );
}
