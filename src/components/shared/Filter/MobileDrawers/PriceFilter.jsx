import { ArrowLeft } from "lucide-react";
import { SubmitButtons } from "@/components/shared/Filter/MobileFilterSubmitButtons";
import React from "react";

export const PriceFilter = ({ closePriceDrawer, priceOpen, t }) => {
  return (
    <div
      className={`fixed z-50 top-0 right-0 flex flex-col pb-5 w-full h-full bg-white transform transition-transform duration-300 ${priceOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className={`flex items-center justify-start`}>
        <button onClick={closePriceDrawer} className="p-2">
          <ArrowLeft className={`size-6`} />
        </button>
        <h2 className="text-body3 font-bold text-button p-4">
          {t("price.title")}
        </h2>
      </div>
      <div className={`bg-button w-full h-[1px] mb-4`}></div>
      <form className={`flex items-center justify-between px-3`}>
        <input
          type="text"
          className={`border border-button rounded-full max-w-[150px] max-h-[40px] size-full p-2 text-center`}
          placeholder={`${t("price.from")} 0 ${t("price.currency")}`}
        />
        <input
          type="text"
          className={`border border-button rounded-full max-w-[150px] max-h-[40px] size-full p-2 text-center`}
          placeholder={`${t("price.to")} 35000 ${t("price.currency")}`}
        />
      </form>
      <div className={`w-full mt-auto`}>
        <div className={`bg-button w-full my-5 h-[1px]`}></div>
        <SubmitButtons />
      </div>
    </div>
  );
};
