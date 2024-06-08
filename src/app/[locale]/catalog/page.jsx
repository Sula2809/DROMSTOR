import { BreadCrumb } from "@/components/shared/BreadCrumb/BreadCrumb";
import { CatalogFilter } from "@/components/shared/Catalog/CatalogFilter/CatalogFilter";
import { SortBy } from "@/components/shared/Catalog/SortBy/SortBy";
import { CatalogContent } from "@/components/shared/Catalog/CatalogContent/CatalogContent";

const catalogBreadCrumbs = [
  { name: "Главная", link: "/" },
  { name: "Каталог", link: "/catalog" },
];

export default function CatalogPage() {
  return (
    <div className={`container py-6`}>
      <BreadCrumb items={catalogBreadCrumbs} />
      <div className={`pt-8 flex gap-20 justify-between`}>
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
    </div>
  );
}
