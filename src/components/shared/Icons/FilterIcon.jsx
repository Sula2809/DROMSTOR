export const FilterIcon = ({
  width = 32,
  height = 32,
  isFill = false,
  fill = "#221D19",
  isStroke = true,
  stroke = "#221D19",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill={isFill ? fill : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 12.5L5 4.5" stroke="#221D19" strokeLinecap="round" />
      <path d="M19 20.5L19 17.5" stroke="#221D19" strokeLinecap="round" />
      <path d="M5 20.5L5 16.5" stroke="#221D19" strokeLinecap="round" />
      <path d="M19 13.5L19 4.5" stroke="#221D19" strokeLinecap="round" />
      <path d="M12 7.5L12 4.5" stroke="#221D19" strokeLinecap="round" />
      <path d="M12 20.5L12 11.5" stroke="#221D19" strokeLinecap="round" />
      <circle cx="5" cy="14.5" r="2" stroke="#221D19" strokeLinecap="round" />
      <circle cx="12" cy="9.5" r="2" stroke="#221D19" strokeLinecap="round" />
      <circle cx="19" cy="15.5" r="2" stroke="#221D19" strokeLinecap="round" />
    </svg>
  );
};
