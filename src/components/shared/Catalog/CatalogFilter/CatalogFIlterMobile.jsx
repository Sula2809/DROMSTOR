"use client";
import { useState } from "react";
import { ChevronRight, XIcon } from "lucide-react";
import { FilterIcon } from "@/components/shared/Icons/FilterIcon";
import { CategoriesFilter } from "@/components/shared/Filter/MobileDrawers/CategoriesFilter";
import { SubCategoriesFilter } from "@/components/shared/Filter/MobileDrawers/SubCategoriesFilter";
import { SubSubCategoriesFilter } from "@/components/shared/Filter/MobileDrawers/SubSubCategoriesFilter";
import { ColorFilter } from "@/components/shared/Filter/MobileDrawers/ColorFilter";
import { PriceFilter } from "@/components/shared/Filter/MobileDrawers/PriceFilter";
import { useTranslations } from "next-intl";

export const CatalogFilterMobile = () => {
  const t = useTranslations("Filters");

  const [mainDrawerOpen, setMainDrawerOpen] = useState(false);
  const [categoriesDrawerOpen, setCategoriesDrawerOpen] = useState(false);
  const [subDrawerOpen, setSubDrawerOpen] = useState(false);
  const [subSubDrawerOpen, setSubSubDrawerOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);

  const openMainDrawer = () => setMainDrawerOpen(true);
  const closeMainDrawer = () => setMainDrawerOpen(false);

  const openCategoriesDrawer = () => setCategoriesDrawerOpen(true);
  const closeCategoriesDrawer = () => setCategoriesDrawerOpen(false);

  const openSubDrawer = () => setSubDrawerOpen(true);
  const closeSubDrawer = () => setSubDrawerOpen(false);

  const openSubSubDrawer = () => setSubSubDrawerOpen(true);
  const closeSubSubDrawer = () => setSubSubDrawerOpen(false);

  const openPriceDrawer = () => setPriceOpen(true);
  const closePriceDrawer = () => setPriceOpen(false);

  const openColorDrawer = () => setColorOpen(true);
  const closeColorDrawer = () => setColorOpen(false);

  return (
    <>
      <button
        onClick={openMainDrawer}
        className="p-2 bg-inherit text-button font-normal text-body3 flex items-center justify-center w-1/2 gap-4"
      >
        <FilterIcon width={24} height={24} />
        {t("title")}
      </button>

      <div
        className={`fixed text-button z-20 top-0 right-0 w-full h-full bg-white transform transition-transform duration-300 ${mainDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className={`flex items-center justify-start`}>
          <button onClick={closeMainDrawer} className="p-2">
            <XIcon className={`size-6 text-button`} />
          </button>
          <h2 className="text-body3 font-bold text-button p-4">{t("title")}</h2>
        </div>
        <div className={`bg-button w-full h-[1px]`}></div>
        <ul className="p-4 space-y-3">
          <li
            onClick={openCategoriesDrawer}
            className="cursor-pointer flex justify-between items-center"
          >
            {t("categories")}
            <ChevronRight className={`size-4`} />
          </li>
          <li
            onClick={openPriceDrawer}
            className="cursor-pointer flex justify-between items-center"
          >
            {t("price.title")}
            <ChevronRight className={`size-4`} />
          </li>
          <li
            onClick={openColorDrawer}
            className="cursor-pointer flex justify-between items-centerr"
          >
            {t("colors.title")}
            <ChevronRight className={`size-4`} />
          </li>
        </ul>
      </div>
      <CategoriesFilter
        categoriesDrawerOpen={categoriesDrawerOpen}
        closeCategoriesDrawer={closeCategoriesDrawer}
        openSubDrawer={openSubDrawer}
        t={t}
      />
      <SubCategoriesFilter
        closeSubDrawer={closeSubDrawer}
        openSubSubDrawer={openSubSubDrawer}
        subDrawerOpen={subDrawerOpen}
        t={t}
      />
      <SubSubCategoriesFilter
        closeSubSubDrawer={closeSubSubDrawer}
        subSubDrawerOpen={subSubDrawerOpen}
        t={t}
      />
      <ColorFilter
        closeColorDrawer={closeColorDrawer}
        colorOpen={colorOpen}
        t={t}
      />
      <PriceFilter
        closePriceDrawer={closePriceDrawer}
        priceOpen={priceOpen}
        t={t}
      />
    </>
  );
};
