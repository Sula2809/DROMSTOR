import { BreadCrumb } from "@/components/shared/BreadCrumb/BreadCrumb";
import { CatalogFilter } from "@/components/shared/Catalog/CatalogFilter/CatalogFilter";
import { SortBy } from "@/components/shared/Catalog/SortBy/SortBy";
import { CatalogContent } from "@/components/shared/Catalog/CatalogContent/CatalogContent";
import { CatalogDesktop } from "@/components/shared/Catalog/CatalogDesktop";
import { CatalogMobile } from "@/components/shared/Catalog/CatalogMobile";

const catalogBreadCrumbs = [
  { name: "Главная", link: "/" },
  { name: "Каталог", link: "/catalog" },
];

export default function CatalogPage() {
  return (
    <div className={` md:container md:px-10 py-0`}>
      <BreadCrumb items={catalogBreadCrumbs} className={`hidden md:block `} />
      <CatalogDesktop className={"hidden md:flex"} />
      <CatalogMobile className={`md:hidden p-0`} />
    </div>
  );
}
