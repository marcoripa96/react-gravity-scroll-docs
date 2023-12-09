// "radial-gradient(at 27% 37%, #6a82fb 0, transparent 50%), radial-gradient(at 97% 21%, #a3a1ff 0, transparent 50%), radial-gradient(at 52% 99%, #fc5c7d 0, transparent 50%), radial-gradient(at 10% 29%, #4bcffa 0, transparent 50%), radial-gradient(at 97% 96%, #f5a9b8 0, transparent 50%), radial-gradient(at 33% 50%, #68e0cf 0, transparent 50%), radial-gradient(at 79% 53%, #e0c3fc 0, transparent 50%);",

export const Symbols = () => {
  return (
    <svg
      width="200"
      height="50"
      viewBox="0 0 200 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Triangle */}
      <polygon
        points="10,40 25,10 40,40"
        stroke="#000"
        fill="none"
        opacity={0.1}
        strokeWidth="1"
      />

      {/* Circle */}
      <circle
        cx="70"
        cy="25"
        r="15"
        stroke="#000"
        fill="none"
        opacity={0.1}
        strokeWidth="1"
      />

      {/* Square */}
      <rect
        x="100"
        y="10"
        width="30"
        stroke="#000"
        height="30"
        strokeWidth="1"
        fill="none"
        opacity={0.1}
      />

      {/* X Symbol */}
      <line
        x1="150"
        y1="10"
        x2="170"
        y2="40"
        stroke="#000"
        strokeWidth="1"
        opacity={0.1}
      />
      <line
        x1="170"
        y1="10"
        x2="150"
        y2="40"
        stroke="#000"
        strokeWidth="1"
        opacity={0.1}
      />
    </svg>
  );
};
