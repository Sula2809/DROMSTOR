import { ArrowLeft } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { SubmitButtons } from "@/components/shared/Filter/MobileFilterSubmitButtons";
import React from "react";

export const ColorFilter = ({ closeColorDrawer, colorOpen, t }) => {
  return (
    <div
      className={`fixed z-50 top-0 right-0 flex flex-col pb-5 w-full h-full bg-white transform transition-transform duration-300 ${colorOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className={`flex items-center justify-start`}>
        <button onClick={closeColorDrawer} className="p-2">
          <ArrowLeft className={`size-6`} />
        </button>
        <h2 className="text-body3 font-bold text-button p-4">
          {t("colors.title")}
        </h2>
      </div>
      <div className={`bg-button w-full h-[1px]`}></div>
      <ul className="p-4 space-y-3">
        <li className="cursor-pointer">
          <div className="flex items-center space-x-2">
            <Checkbox id="white" />
            <label
              htmlFor="white"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {t("colors.white")}
            </label>
          </div>
        </li>
        <li className="cursor-pointer">
          <div className="flex items-center space-x-2">
            <Checkbox id="red" />
            <label
              htmlFor="red"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {t("colors.red")}
            </label>
          </div>
        </li>
        <li className="cursor-pointer">
          <div className="flex items-center space-x-2">
            <Checkbox id="black" />
            <label
              htmlFor="black"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {t("colors.black")}
            </label>
          </div>
        </li>
        <li className="cursor-pointer">
          <div className="flex items-center space-x-2">
            <Checkbox id="grey" />
            <label
              htmlFor="grey"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {t("colors.grey")}
            </label>
          </div>
        </li>
      </ul>
      <div className={`w-full mt-auto`}>
        <div className={`bg-button w-full my-5 h-[1px]`}></div>
        <SubmitButtons />
      </div>
    </div>
  );
};
