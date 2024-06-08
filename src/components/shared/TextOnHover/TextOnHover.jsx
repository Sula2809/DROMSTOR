export const TextOnHover = ({ isText = true, isMobile = false }) => {
  return (
    <p
      className={`absolute size-full text-body4 md:text-body1 inset-0 flex items-end ${isMobile ? "" : "bg-opacity-10 opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-70"} text-white bg-transparent transition-opacity duration-300 p-1 sm:p-3 md:p-5 lg:p-7`}
    >
      {isText ? "Text is here" : null}
    </p>
  );
};
