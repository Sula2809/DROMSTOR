import { ArrowLeft, ChevronRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { SubmitButtons } from "@/components/shared/Filter/MobileFilterSubmitButtons";
import React from "react";

export const SubCategoriesFilter = ({
  closeSubDrawer,
  subDrawerOpen,
  openSubSubDrawer,
  t,
}) => {
  return (
    <div
      className={`fixed z-50 top-0 flex flex-col right-0 w-full h-full bg-white transform transition-transform duration-300 ${subDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className={`flex items-center justify-start`}>
        <button onClick={closeSubDrawer} className="p-2">
          <ArrowLeft className={`size-6`} />
        </button>
        <h2 className="text-body3 font-bold text-button p-4">
          {t("subcategories")}
        </h2>
      </div>
      <div className={`bg-button w-full h-[1px] mb-4`}></div>
      <ul className="p-4 space-y-3">
        <li className="cursor-pointer flex justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="subCategory1" />
            <label
              htmlFor="subCategory1"
              className="text-body3 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Субкатегори 1
            </label>
          </div>
          <ChevronRight className={`size-6`} onClick={openSubSubDrawer} />
        </li>
        <li className="cursor-pointer flex justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="subCategory2" />
            <label
              htmlFor="subCategory2"
              className="text-body3 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Субкатегори 1
            </label>
          </div>{" "}
          <ChevronRight className={`size-6`} onClick={openSubSubDrawer} />
        </li>
        <li className="cursor-pointer flex justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="subCategory3" />
            <label
              htmlFor="subCategory3"
              className="text-body3 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Субкатегори 1
            </label>
          </div>{" "}
          <ChevronRight className={`size-6`} onClick={openSubSubDrawer} />
        </li>
      </ul>
      <div className={`w-full mt-auto pb-5`}>
        <div className={`bg-button w-full my-5 h-[1px]`}></div>
        <SubmitButtons />
      </div>
    </div>
  );
};
