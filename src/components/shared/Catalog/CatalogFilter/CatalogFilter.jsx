import { FilterIcon } from "@/components/shared/Icons/FilterIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslations } from "next-intl";
import { SubmitButtons } from "@/components/shared/Filter/MobileFilterSubmitButtons";

export const CatalogFilter = () => {
  const filter = useTranslations("Filters");

  return (
    <div className={``}>
      <div className={`flex items-center justify-start w-full`}>
        <FilterIcon />
        <h3 className={`text-h4 font-bold text-button`}>{filter("title")}</h3>
      </div>
      <div>
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="filter-1">
            <AccordionTrigger>{filter("colors.title")}</AccordionTrigger>
            <AccordionContent className={`space-y-3`}>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed cursor-pointer peer-disabled:opacity-70"
                >
                  {filter("colors.white")}
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms2" />
                <label
                  htmlFor="terms2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed cursor-pointer peer-disabled:opacity-70"
                >
                  {filter("colors.red")}
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms3" />
                <label
                  htmlFor="terms3"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed cursor-pointer peer-disabled:opacity-70"
                >
                  {filter("colors.black")}
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms3" />
                <label
                  htmlFor="terms3"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed cursor-pointer peer-disabled:opacity-70"
                >
                  {filter("colors.grey")}
                </label>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="filter-2">
            <AccordionTrigger>{filter("price.title")}</AccordionTrigger>
            <AccordionContent className={`flex justify-between`}>
              <input
                type="text"
                placeholder={`${filter("price.from")} 0 ${filter("price.currency")}`}
                className={`border border-button rounded-full text-center py-1 px-2 max-w-[170px] text-button text-body3`}
              />
              <input
                type="text"
                placeholder={`${filter("price.to")} 35000 ${filter("price.currency")}`}
                className={`border border-button rounded-full text-center py-1 px-2 max-w-[170px] text-button text-body3`}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="filter-3">
            <AccordionTrigger>Категория</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="filter-4">
            <AccordionTrigger>Категория</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="filter-5">
            <AccordionTrigger>Категория</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="filter-6">
            <AccordionTrigger>Категория</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className={`mt-auto py-5`}>
        <SubmitButtons />
      </div>
    </div>
  );
};
