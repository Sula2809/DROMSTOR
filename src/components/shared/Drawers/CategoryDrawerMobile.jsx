"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const CategoryDrawerMobile = ({ className }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
    if (activeCategory) {
      setActiveCategory(false);
    }
  };
  const openCategory = (category) => setActiveCategory(category);
  const goBack = () => setActiveCategory(null);

  const categories = [
    {
      name: "Стеновые панели",
      subcategories: [
        "Bamboo Charcoal Wood Veneer",
        "WPC Wall Panel",
        "Outdoor Wall Panel",
      ],
    },
    {
      name: "Дубовые панели",
      subcategories: ["нет нет нет", "WPC Wall Panel", "Outdoor Wall Panel"],
    },
    {
      name: "Стеклянные панели",
      subcategories: ["дададада", "WPC Wall Panel", "Outdoor Wall Panel"],
    },
    // Добавьте другие категории аналогично...
  ];

  return (
    <div className={cn(`z-20`, className)}>
      <button
        onClick={toggleDrawer}
        className="bg-inherit border-none flex flex-col justify-center items-center relative w-8 h-8"
      >
        <span
          className={`bg-button absolute top-1/4 left-0 h-[2px] w-full block transition-transform duration-1000 ${
            isDrawerOpen ? "rotate-45 translate-y-[10px]" : ""
          }`}
        ></span>
        <span
          className={`bg-button absolute top-1/4 left-0 h-[2px] w-full block mt-2 transition-opacity duration-1000 ${
            isDrawerOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`bg-button absolute top-1/4 left-0 h-[2px] w-full block mt-4 transition-transform duration-1000 ${
            isDrawerOpen ? "-rotate-45 -translate-y-[6px]" : ""
          }`}
        ></span>
      </button>
      <div
        className={`fixed z-50 top-20 left-0 h-full w-full bg-white transform transition-transform duration-500 ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {activeCategory ? (
          <div className="h-full w-full">
            <div className={`flex items-center justify-start`}>
              <button onClick={goBack} className="p-3">
                <ChevronLeft className={`size-5 text-slate-400`} />
              </button>
              <h2 className="p-3 text-body3 font-bold text-button text-center">
                {activeCategory}
              </h2>
            </div>
            <div className={`bg-button h-[1px] w-full`}></div>
            <div className="p-5">
              {categories
                .find((category) => category.name === activeCategory)
                .subcategories.map((subcategory, index) => (
                  <div key={index} className="p-2">
                    {subcategory}
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div className="h-full w-full">
            <h2 className="p-3 text-body3 font-bold text-button text-center">
              Каталог
            </h2>
            <div className={`bg-button h-[1px] w-full`}></div>
            <div className="p-5">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="p-2 text-button text-body3 font-normal flex justify-between"
                  onClick={() => openCategory(category.name)}
                >
                  {category.name}
                  <ChevronRight className={`size-5 text-slate-400`} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
