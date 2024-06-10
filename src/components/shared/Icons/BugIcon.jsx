export const BugIcon = ({
  width = 32,
  height = 32,
  isFill = false,
  fill = "#0C0C0C",
  isStroke = true,
  stroke = "#0C0C0C",
  isInCart = false,
}) => {
  return isInCart ? (
    <svg
      width="26"
      height="25"
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.66699 12L7.66699 6.66667C7.66699 3.72115 10.0548 1.33334 13.0003 1.33334V1.33334C15.9458 1.33334 18.3337 3.72115 18.3337 6.66667L18.3337 12"
        stroke="#5D5146"
        strokeLinecap="round"
      />
      <path
        d="M2.02768 11.6678C2.17276 9.92692 2.24529 9.05647 2.81938 8.52824C3.39347 8 4.26693 8 6.01386 8H19.9861C21.7331 8 22.6065 8 23.1806 8.52824C23.7547 9.05647 23.8272 9.92692 23.9723 11.6678L24.8195 21.8339C24.904 22.8474 24.9462 23.3542 24.6491 23.6771C24.352 24 23.8435 24 22.8264 24H3.1736C2.15655 24 1.64802 24 1.35092 23.6771C1.05382 23.3542 1.09605 22.8474 1.18051 21.8339L2.02768 11.6678Z"
        fill="#5D5146"
        stroke="#5D5146"
      />
    </svg>
  ) : (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill={isFill ? fill : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.667 16L10.667 10.6667C10.667 7.72115 13.0548 5.33334 16.0003 5.33334V5.33334C18.9458 5.33334 21.3337 7.72115 21.3337 10.6667L21.3337 16"
        stroke={stroke}
        strokeLinecap="none"
      />
      <path
        d="M5.02768 15.6678C5.17276 13.9269 5.24529 13.0565 5.81938 12.5282C6.39347 12 7.26693 12 9.01386 12H22.9861C24.7331 12 25.6065 12 26.1806 12.5282C26.7547 13.0565 26.8272 13.9269 26.9723 15.6678L27.8195 25.8339C27.904 26.8474 27.9462 27.3542 27.6491 27.6771C27.352 28 26.8435 28 25.8264 28H6.1736C5.15655 28 4.64802 28 4.35092 27.6771C4.05382 27.3542 4.09605 26.8474 4.18051 25.8339L5.02768 15.6678Z"
        stroke={isStroke ? stroke : "none"}
      />
    </svg>
  );
};
