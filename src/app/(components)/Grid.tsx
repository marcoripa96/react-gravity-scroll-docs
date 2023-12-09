import React from "react";

type GridProps = React.SVGProps<SVGSVGElement> & {
  squareSize: number;
  squareColor: string;
};

export const Grid: React.FC<GridProps> = ({
  squareSize,
  squareColor,
  ...props
}) => {
  return (
    <svg {...props}>
      <defs>
        <pattern
          id="grid"
          width={squareSize}
          height={squareSize}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${squareSize} 0 L 0 0 0 ${squareSize}`}
            fill="none"
            stroke={squareColor}
          />

          <radialGradient
            id="fadeGradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="#fcfcfc" stopOpacity="1" />
          </radialGradient>
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#grid)" />
      <rect width="100%" height="100%" fill="url(#fadeGradient)" />
    </svg>
  );
};
