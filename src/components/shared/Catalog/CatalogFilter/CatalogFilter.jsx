"use client";
import { FilterIcon } from "@/components/shared/Icons/FilterIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLocale, useTranslations } from "next-intl";
import { SubmitButtons } from "@/components/shared/Filter/MobileFilterSubmitButtons";
import { useEffect, useState } from "react";
import useGetAllCategoriesStore from "@/shared/services/store/AllCategories.store";
import useGetSubCategoriesStore from "@/shared/services/store/SubCategories.store";
import { GetColors } from "@/shared/services/colors/colors";
import productStores from "@/shared/services/store/Products.store";

export const CatalogFilter = () => {
  const filter = useTranslations("Filters");
  const locale = useLocale();

  const [fetchingColors, setFetchingColor] = useState(null);
  const [colors, setSelectedColors] = useState([]);
  const [category, setSelectedCategories] = useState([]);
  const [subcategory, setSelectedSubCategories] = useState([]);
  const [min_price, setMin_price] = useState(null);
  const [max_price, setMax_price] = useState(null);

  const { categoryData } = useGetAllCategoriesStore();
  const { subCategoryData } = useGetSubCategoriesStore();
  const { fetchAllProducts } = productStores.useGetAllProductsStore();

  useEffect(() => {
    const fetchColors = async () => {
      const resColor = await GetColors();
      if (resColor) {
        setFetchingColor(resColor);
      }
    };
    fetchColors();
  }, []);

  const handleColorChange = (id) => {
    setSelectedColors((prev) =>
      prev.includes(id)
        ? prev.filter((colorId) => colorId !== id)
        : [...prev, id],
    );
  };

  const handleCategoryChange = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id)
        ? prev.filter((categoryId) => categoryId !== id)
        : [...prev, id],
    );
  };

  const handleSubCategoryChange = (id) => {
    setSelectedSubCategories((prev) =>
      prev.includes(id)
        ? prev.filter((subCategoryId) => subCategoryId !== id)
        : [...prev, id],
    );
  };

  const OnSubmit = () => {
    console.log("data:", {
      colors,
      category,
      subcategory,
      min_price,
      max_price,
    });
    fetchAllProducts(
      null,
      colors,
      min_price,
      max_price,
      category,
      subcategory,
      null,
    );
  };

  return (
    <div>
      <div className="flex items-center justify-start w-full">
        <FilterIcon />
        <h3 className="text-h4 font-bold text-button">{filter("title")}</h3>
      </div>
      <div>
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="filter-1">
            <AccordionTrigger>{filter("colors.title")}</AccordionTrigger>
            <AccordionContent className="space-y-3">
              {fetchingColors?.results?.map((item) => (
                <div key={item.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`color-${item.id}`}
                    onChange={() => handleColorChange(item.id)}
                    checked={colors.includes(item.id)}
                  />
                  <label
                    htmlFor={`color-${item.id}`}
                    className="text-sm font-medium leading-none cursor-pointer"
                  >
                    {locale === "ru" ? item.name : item.name_en}
                  </label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="filter-2">
            <AccordionTrigger>{filter("price.title")}</AccordionTrigger>
            <AccordionContent className="flex justify-between">
              <input
                type="text"
                placeholder={`${filter("price.from")} 0 ${filter("price.currency")}`}
                className="border border-button rounded-full text-center py-1 px-2 max-w-[120px] text-button text-body4"
                onChange={(e) => setMin_price(e.target.value)}
              />
              <input
                type="text"
                placeholder={`${filter("price.to")} 35000 ${filter("price.currency")}`}
                className="border border-button rounded-full text-center py-1 px-2 max-w-[120px] text-button text-body4"
                onChange={(e) => setMax_price(e.target.value)}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="filter-3">
            <AccordionTrigger>Категории</AccordionTrigger>
            <AccordionContent className="space-y-3">
              {categoryData?.results?.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`category-${category.id}`}
                    onChange={() => handleCategoryChange(category.id)}
                  />
                  <label
                    htmlFor={`category-${category.id}`}
                    className="text-sm font-medium leading-none cursor-pointer"
                  >
                    {locale === "ru" ? category.name : category.name_en}
                  </label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="filter-4">
            <AccordionTrigger>Подкатегории</AccordionTrigger>
            <AccordionContent className="space-y-3">
              {subCategoryData?.results?.map((subcat) => (
                <div key={subcat.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`subcategory-${subcat.id}`}
                    onChange={() => handleSubCategoryChange(subcat.id)}
                    checked={subcategory.includes(subcat.id)}
                  />
                  <label
                    htmlFor={`subcategory-${subcat.id}`}
                    className="text-sm font-medium leading-none cursor-pointer"
                  >
                    {locale === "ru" ? subcat.name : subcat.name_en}
                  </label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mt-auto py-5">
        <SubmitButtons submit={OnSubmit} />
      </div>
    </div>
  );
};
