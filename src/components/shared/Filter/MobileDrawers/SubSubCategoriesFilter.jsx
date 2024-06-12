import { ArrowLeft } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { SubmitButtons } from "@/components/shared/Filter/MobileFilterSubmitButtons";
import React from "react";

export const SubSubCategoriesFilter = ({
  closeSubSubDrawer,
  subSubDrawerOpen,
  t,
}) => {
  return (
    <div
      className={`fixed z-50 top-0 right-0 flex flex-col w-full h-full bg-white transform transition-transform duration-300 ${subSubDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className={`flex items-center justify-start`}>
        <button onClick={closeSubSubDrawer} className="p-2">
          <ArrowLeft className={`size-6`} />
        </button>
        <h2 className="text-body3 font-bold text-button p-4">
          {t("subsubcategories")}
        </h2>
      </div>
      <div className={`bg-button w-full h-[1px] mb-4`}></div>
      <ul className="p-4 space-y-3">
        <li>
          <div className="flex items-center space-x-2">
            <Checkbox id="subsubCategory1" />
            <label
              htmlFor="subsubCategory1"
              className="text-body3 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Субсубкатегори 1
            </label>
          </div>{" "}
        </li>
        <li>
          <div className="flex items-center space-x-2">
            <Checkbox id="subsubCategory2" />
            <label
              htmlFor="subsubCategory2"
              className="text-body3 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Субсубкатегори 1
            </label>
          </div>{" "}
        </li>
        <li>
          <div className="flex items-center space-x-2">
            <Checkbox id="subsubCategory3" />
            <label
              htmlFor="subsubCategory3"
              className="text-body3 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Субсубкатегори 1
            </label>
          </div>{" "}
        </li>
      </ul>
      <div className={`w-full mt-auto pb-5`}>
        <div className={`bg-button w-full my-5 h-[1px]`}></div>
        <SubmitButtons />
      </div>
    </div>
  );
};
