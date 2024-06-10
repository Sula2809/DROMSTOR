import { FilterIcon } from "@/components/shared/Icons/FilterIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

export const CatalogFilter = () => {
  return (
    <div>
      <div className={`flex items-center justify-start w-full`}>
        <FilterIcon />
        <h3 className={`text-h4 font-bold text-button`}>Фильтр</h3>
      </div>
      <div>
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="filter-1">
            <AccordionTrigger>Цвет</AccordionTrigger>
            <AccordionContent className={`space-y-3`}>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed cursor-pointer peer-disabled:opacity-70"
                >
                  Белый
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms2" />
                <label
                  htmlFor="terms2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed cursor-pointer peer-disabled:opacity-70"
                >
                  Черный
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms3" />
                <label
                  htmlFor="terms3"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed cursor-pointer peer-disabled:opacity-70"
                >
                  Красный
                </label>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="filter-2">
            <AccordionTrigger>Цена</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
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
    </div>
  );
};
