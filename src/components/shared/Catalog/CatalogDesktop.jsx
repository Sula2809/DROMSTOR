import { CatalogFilter } from "@/components/shared/Catalog/CatalogFilter/CatalogFilter";
import { SortBy } from "@/components/shared/Catalog/SortBy/SortBy";
import { CatalogContent } from "@/components/shared/Catalog/CatalogContent/CatalogContent";
import { cn } from "@/lib/utils";

export const CatalogDesktop = ({ className }) => {
  return (
    <div className={cn(`pt-8 flex gap-5 justify-between`, className)}>
      <div className={`w-1/5`}>
        <CatalogFilter />
      </div>
      <div className={`w-4/5`}>
        <div className={`flex justify-end pb-4`}>
          <SortBy />
        </div>
        <div>
          <CatalogContent />
        </div>
      </div>
    </div>
  );
};
