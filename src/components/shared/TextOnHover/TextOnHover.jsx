import { useLocale } from "next-intl";

export const TextOnHover = ({
  isText = true,
  item = null,
  handleProduct,
  isMobile = false,
}) => {
  const locale = useLocale();

  return (
    <div
      className={`absolute size-full text-body4 md:text-body1 inset-0 flex items-end md:bg-opacity-10 md:opacity-0 md:hover:opacity-100 md:hover:bg-black md:hover:bg-opacity-70 text-white bg-transparent transition-opacity duration-300 p-1 sm:p-3 md:p-5 lg:p-7 cursor-pointer`}
      onClick={() =>
        handleProduct && item ? handleProduct(item.id, item.category.id) : null
      }
    >
      <p
        className={`${
          isMobile
            ? "border border-dark p-1 bg-black"
            : "bg-inherit border-none"
        }`}
      >
        {isText && item
          ? locale === "ru"
            ? item.name
            : locale === "en"
              ? item.name_en
              : null
          : null}
      </p>
    </div>
  );
};
