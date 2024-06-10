import { BreadCrumb } from "@/components/shared/BreadCrumb/BreadCrumb";
import { decodeURL } from "@/shared/services/decodeURL";
import { CatalogFilter } from "@/components/shared/Catalog/CatalogFilter/CatalogFilter";
import { SortBy } from "@/components/shared/Catalog/SortBy/SortBy";
import { CatalogContent } from "@/components/shared/Catalog/CatalogContent/CatalogContent";
import { CatalogDesktop } from "@/components/shared/Catalog/CatalogDesktop";
import { CatalogMobile } from "@/components/shared/Catalog/CatalogMobile";

export default function CatalogPage({ params }) {
  const categoryName = decodeURL(params.name);
  const catalogBreadCrumbs = [
    { name: "Главная", link: "/" },
    { name: "Каталог", link: "/catalog" },
    {
      name: categoryName,
      link: `/catalog/${categoryName}`,
    },
  ];
  return (
    <div className={` md:container md:px-10 py-0`}>
      <BreadCrumb items={catalogBreadCrumbs} className={`hidden md:block `} />
      <CatalogDesktop className={"hidden md:flex"} />
      <CatalogMobile className={`md:hidden p-0`} name={categoryName} />
    </div>
  );
}
