import { SortByMobile } from "@/components/shared/Catalog/SortBy/SortByMobile";
import { cn } from "@/lib/utils";
import { CatalogFilterMobile } from "./CatalogFilter/CatalogFIlterMobile";
import { CatalogContent } from "@/components/shared/Catalog/CatalogContent/CatalogContent";

export const CatalogMobile = ({ className, name }) => {
  return (
    <div className={cn("w-full p-0", className)}>
      {name && (
        <div className={`text-body3 font-bold text-button md:hidden my-3 ml-5`}>
          {name}
        </div>
      )}
      <div className="border border-t-button border-b-button flex justify-center p-0 w-full">
        <SortByMobile />
        <CatalogFilterMobile />
      </div>
      <div>
        <CatalogContent />
      </div>
    </div>
  );
};
