"use client";

import { Variants, motion } from "framer-motion";
import { Github } from "lucide-react";
import { useInView } from "react-intersection-observer";

const variantsSign = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 1.5, bounce: 0 },
      opacity: { duration: 0.01 },
    },
  },
};

const variantsGithub: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: 1.2,
      duration: 0.4,
    },
  },
};

export function Sign() {
  const { ref, inView } = useInView({ threshold: 0.7 });

  return (
    <div className="flex flex-col gap-4">
      <svg
        ref={ref}
        className="w-20 h-20"
        viewBox="0 0 379 483"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M2 380C8.89106 373.798 16.7294 369.036 23.2778 362.278C55.782 328.733 80.9765 288.457 104.222 248.222C135.898 193.396 164.896 134.022 181.667 72.7222C185.438 58.9381 190 43.9148 190 29.4444C190 26.2914 176.462 38.7276 175.056 40.0556C154.156 59.7938 134.297 85.0901 122.778 111.444C108.428 144.276 99.8369 178.624 97.6667 214.333C96.1418 239.424 97.3714 263.325 109 286.167C113.443 294.894 120.662 304.82 131.556 300.667C136.154 298.913 140.086 295.395 143.722 292.222C159.181 278.737 171.262 262.003 182.722 245.111C216.904 194.73 236.677 136.52 256.667 79.4445C265.38 54.5668 274.673 29.9578 282.444 4.77778C285.489 -5.08521 284.939 10.5158 284.833 12.6111C283.748 34.1352 279.442 54.9827 275.556 76.1111C265.651 129.954 256.22 183.841 245.611 237.556C236.892 281.705 227.035 325.967 222 370.722C220.582 383.325 218.656 395.687 217.778 408.333C217.541 411.75 216 415.241 216 418.556C216 418.86 215.662 422.876 215.222 421.556C212.61 413.72 215.696 400.767 216.611 393.111C218.985 373.242 222.606 353.565 224.778 333.667C226.843 314.744 229.594 294.927 237.667 277.5C244.467 262.82 256.71 251.458 272.889 248.222C280.513 246.697 298.731 244.559 304 252.111C312.034 263.626 307.203 286.144 303.889 298.167C295.792 327.537 282.164 357.939 264.111 382.556C253.073 397.608 236.451 409.993 218.278 415C209.456 417.43 194.805 418.274 189.778 408.556C186.787 402.774 192.818 400.836 197.444 400.444C203.982 399.89 210.204 400.516 216.5 402.389C233.641 407.488 250.832 414.318 267.222 421.444C298.97 435.248 331.048 450.995 359.889 470.222C365.449 473.929 370.872 477.725 376.556 481.222C377.002 481.497 375.508 481.127 375 481"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
          variants={variantsSign}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        />
      </svg>

      <motion.a
        initial="hidden"
        variants={variantsGithub}
        animate={inView ? "visible" : "hidden"}
        className="px-2 py-1 bg-black flex items-center text-white rounded-full"
        href="https://github.com/marcoripa96/react-gravity-scroll-docs"
      >
        <Github className="text-white" /> Docs repo
      </motion.a>
    </div>
  );
}
