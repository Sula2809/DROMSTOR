import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FilterIcon } from "@/components/shared/Icons/FilterIcon";

export const CatalogFilterMobile = () => {
  return (
    <Popover>
      <PopoverTrigger
        className={`flex items-center justify-center w-1/2 border border-l-button`}
      >
        <FilterIcon />
        <h3 className={`text-body3 font-normal text-button`}>Фильтр</h3>
      </PopoverTrigger>
      <PopoverContent className={`w-full`}>
        Place content for the popover here.
      </PopoverContent>
    </Popover>
  );
};
